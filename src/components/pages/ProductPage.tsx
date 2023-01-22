import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext';

const ProductPage: React.FC = () => {
  const { handle } = useParams();

  const { fetchProductByHandle, addItemToCheckout, product } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchProductByHandle(handle);
  }, [fetchProductByHandle, handle]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <Chakra.Box>
      <Chakra.Grid templateColumns='repeat(2, 1fr)'>
        <Chakra.Image src={product.images[0].src} />
        <Chakra.Box>
          <Chakra.Heading>{product.title}</Chakra.Heading>
          <Chakra.Text>
            ${product.variants[0].price.amount.slice(0, 2)}
          </Chakra.Text>
          <Chakra.Text>{product.description}</Chakra.Text>
          <Chakra.Button
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            Add To Cart
          </Chakra.Button>
        </Chakra.Box>
      </Chakra.Grid>
    </Chakra.Box>
  );
};

export default ProductPage;
