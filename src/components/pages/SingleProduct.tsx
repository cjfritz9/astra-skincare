import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext';
import Button from '../Button';
import RichText from '../RichText';

const SingleProduct: React.FC = () => {
  const { handle } = useParams();

  const { fetchProductByHandle, addItemToCheckout, product } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchProductByHandle(handle);
  }, [fetchProductByHandle, handle]);

  if (!product.title || !window.location.href.includes(product.handle))
    return <div>Loading...</div>;

  return (
    <Chakra.Box p='2rem'>
      <Chakra.Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        m='auto'
      >
        <Chakra.Flex justifyContent='center' alignItems='center'>
          <Chakra.Image
            minWidth='50vw'
            borderRadius='10px'
            mb='2rem'
            src={product.images[0].src}
          />
        </Chakra.Flex>
        <Chakra.Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          px='2rem'
        >
          <Chakra.Heading>{product.title}</Chakra.Heading>
          <Chakra.Text fontSize='14px' color='gray.500' pb='2rem'>
            ${product.variants[0].price.amount.slice(0, 2)}
          </Chakra.Text>
          <Chakra.Text color='gray.500' pb='2rem'>
            {product.description}
          </Chakra.Text>
          <Button
            text='Add To Cart'
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          />
        </Chakra.Flex>
      </Chakra.Grid>
      <RichText />
    </Chakra.Box>
  );
};

export default SingleProduct;
