import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/md';
import { ShopContext } from '../context/shopContext';
import Button from './Button';

const Cart: React.FC = () => {
  
  const {
    isCartOpen,
    closeCart,
    checkout,
    removeLineItem,
    themeColor2,
    accentColor1
  } = React.useContext<any>(ShopContext);

  return (
    <>
      <Chakra.Drawer isOpen={isCartOpen} placement='right' onClose={closeCart}>
        <Chakra.DrawerOverlay />
        <Chakra.DrawerContent>
          <Chakra.DrawerCloseButton />
          <Chakra.DrawerHeader>Your Cart</Chakra.DrawerHeader>
          <Chakra.DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item: any) => {
                console.log(checkout);
                return (
                  <Chakra.Grid
                    textAlign='center'
                    alignItems='center'
                    templateColumns='repeat(4, 1fr)'
                    gap={1}
                    key={item.id}
                  >
                    <Chakra.GridItem colSpan={4}>
                      <Chakra.Flex justifyContent='center'>
                        <Chakra.Text fontWeight='bold'>
                          {item.title}
                        </Chakra.Text>
                      </Chakra.Flex>
                    </Chakra.GridItem>
                    <Chakra.Flex>
                      <Chakra.Image src={item.variant.image.src} />
                    </Chakra.Flex>
                    <Chakra.Flex justifyContent='center'>
                      <Chakra.Text>${item.variant.price.amount}0</Chakra.Text>
                    </Chakra.Flex>
                    <Chakra.Flex justifyContent='center'>
                      <Chakra.Text>x{item.quantity}</Chakra.Text>
                    </Chakra.Flex>
                    <Chakra.Flex justifyContent='flex-end'>
                      <Chakra.Icon
                        w={30}
                        h={30}
                        cursor='pointer'
                        as={ReactIcons.MdClose}
                        onClick={() => removeLineItem(item.id)}
                      />
                    </Chakra.Flex>
                  </Chakra.Grid>
                );
              })
            ) : (
              <Chakra.Flex h='100%' alignItems='center' justifyContent='center'>
                <Chakra.Text fontWeight='bold'>No Items In Cart</Chakra.Text>
              </Chakra.Flex>
            )}
          </Chakra.DrawerBody>

          <Chakra.DrawerFooter justifyContent='space-between'>
            {checkout.totalPrice && +checkout.totalPrice.amount ? (
              <>
                <Chakra.Text>
                  {'$' + checkout.totalPrice.amount + '0'}
                </Chakra.Text>
                <Button
                  text='Checkout'
                  textColor={accentColor1}
                  bgColor={themeColor2}
                  size={{ w: '10rem' }}
                  onClick={() => (window.location.href = checkout.webUrl)}
                />
              </>
            ) : null}
          </Chakra.DrawerFooter>
        </Chakra.DrawerContent>
      </Chakra.Drawer>
    </>
  );
};

export default Cart;
