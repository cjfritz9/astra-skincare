//@ts-nocheck
import * as React from 'react';
import Client from 'shopify-buy';
export const ShopContext = React.createContext({});

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

export class ShopProvider extends React.Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = () => {
    client.checkout.create().then((checkout) => {
      localStorage.setItem('checkout_id', checkout.id);
      this.setState({ checkout });
      console.log(checkout);
    });
  };

  fetchCheckout = (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => this.setState({ checkout }));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      {
        variantId,
        quantity: +quantity
      }
    );
    this.setState({ checkout });
    this.openCart();
    console.log(checkout);
  };

  removeLineItem = async (lineItemIds) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIds
    );
    this.setState({ checkout });
  };

  fetchAllProducts = () => {
    client.product.fetchAll().then((products) => {
      this.setState({ products });
      console.log('products', products);
    });
  };

  fetchProductByHandle = (handle) => {
    client.product.fetchByHandle(handle).then((product) => {
      this.setState({ product });
      console.log(product);
    });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  themeColor1 = '#FFA8E2';
  themeColor2 = '#FF38BD';
  accentColor1 = 'white';
  accentColor2 = 'gray.500';

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductByHandle: this.fetchProductByHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeLineItem: this.removeLineItem,
          openCart: this.openCart,
          closeCart: this.closeCart,
          openMenu: this.openMenu,
          closeMenu: this.closeMenu,
          themeColor1: this.themeColor1,
          themeColor2: this.themeColor2,
          accentColor1: this.accentColor1,
          accentColor2: this.accentColor2
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

export const ShopConsumer = ShopContext.Consumer;

export default ShopProvider;
