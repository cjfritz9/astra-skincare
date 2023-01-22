import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/shopContext';

const Home: React.FC = () => {
  const { fetchAllProducts, products } = React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Chakra.Box>
      <Chakra.Grid templateColumns='repeat(3, 1fr)'>
        {products.map((product: any) => {
          return (
            <Chakra.Box
              _hover={{ opacity: 0.8 }}
              textAlign='center'
              key={product.id}
            >
              <Link to={`products/${product.handle}`}>
                <Chakra.Text>{product.title}</Chakra.Text>
                <Chakra.Image src={product.images[0].src} />
              </Link>
              <Chakra.Text>
                ${product.variants[0].price.amount.slice(0, 2)}
              </Chakra.Text>
            </Chakra.Box>
          );
        })}
      </Chakra.Grid>
    </Chakra.Box>
  );
};

export default Home;
