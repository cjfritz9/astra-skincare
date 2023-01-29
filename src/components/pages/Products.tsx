import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import Button from '../Button';
import { useNavigate } from 'react-router';

const Products: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = React.useState<any[]>([]);
  const [hasMoreProducts, setHasMoreProducts] = React.useState<boolean>(false);
  let addedPerScrollEvent = 1;
  const navigate = useNavigate();
  const { accentColor2, products, fetchAllProducts, addItemToCheckout } =
    React.useContext<any>(ShopContext);

  const showMoreProducts = () => {
    console.log('test');

    if (visibleProducts.length === products.length) {
      return setHasMoreProducts(false);
    }
    setHasMoreProducts(true);
    if (hasMoreProducts && products.length) {
      setVisibleProducts([
        ...products.slice(visibleProducts.length, addedPerScrollEvent)
      ]);
    }
  };

  React.useEffect(() => {
    fetchAllProducts();

    setVisibleProducts([
      ...products.slice(visibleProducts.length, addedPerScrollEvent)
    ]);

    console.log('prod', products);

    // if ((container = document.getElementById('products-container'))) {
    //   if (container.children && container.children.length < products.length) {
    //     setFetchMoreProducts(true);
    //   } else {
    //     setFetchMoreProducts(false);
    //   }
    // }
  }, []);

  return (
    <Chakra.Box>
      <Chakra.Grid>
        <InfiniteScroll
          dataLength={products.length}
          next={() => showMoreProducts()}
          hasMore={hasMoreProducts}
          loader={<Chakra.Progress isIndeterminate colorScheme='pink' />}
          // below props only if you need pull down functionality
          // refreshFunction={this.refresh}
          // pullDownToRefresh
          // pullDownToRefreshThreshold={50}
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>
          //     &#8595; Pull down to refresh
          //   </h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          // }
        >
          <Chakra.Grid
            id='products-container'
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(4, 1fr)'
            ]}
          >
            {products.map((product: any) => {
              return (
                <Chakra.Card
                  maxW='sm'
                  m='2rem'
                  p='1rem'
                  boxShadow='lightgray 1px 1px 5px'
                  _hover={{
                    transform: 'scale(1.01)',
                    transition: 'transform 0.4s ease'
                  }}
                >
                  <Chakra.CardBody>
                    <Chakra.Image
                      src={product.images[0].src}
                      alt='bathbomb'
                      borderRadius='lg'
                      cursor='pointer'
                      _hover={{
                        transform: 'scale(1.02)',
                        transition: 'transform 0.4s ease'
                      }}
                      onClick={() => navigate(`/products/${product.handle}`)}
                    />
                    <Chakra.Flex
                      mt='6'
                      px='.5rem'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Chakra.Heading size='md'>{product.title}</Chakra.Heading>
                      <Chakra.Text color={accentColor2} fontSize='2xl'>
                        ${product.variants[0].price.amount.slice(0, 2)}
                      </Chakra.Text>
                    </Chakra.Flex>
                  </Chakra.CardBody>
                  <Chakra.Divider />
                  <Chakra.CardFooter display='flex' justifyContent='flex-end'>
                    <Button
                      text='Add To Cart'
                      onClick={() =>
                        addItemToCheckout(product.variants[0].id, 1)
                      }
                    />
                  </Chakra.CardFooter>
                </Chakra.Card>
              );
            })}
          </Chakra.Grid>
        </InfiniteScroll>
      </Chakra.Grid>
    </Chakra.Box>
  );
};

export default Products;
