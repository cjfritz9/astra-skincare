import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const Gallery3x1: React.FC = () => {
  const { fetchAllProducts, products, accentColor2 } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Chakra.Grid templateColumns='repeat(3, 1fr)'>
      {products.map((product: any, idx: number) => {
        if (idx > 2) return;
        return (
          <Chakra.Box
            _hover={{ opacity: 0.9, transform: 'scale(1.02)' }}
            textAlign='center'
            pos='relative'
            key={product.id}
          >
            <Link to={`products/${product.handle}`}>
              <Chakra.Image src={product.images[0].src} />
            </Link>
            <Chakra.Text
              fontWeight='bold'
              pos='absolute'
              bottom={['4%', '16%']}
              w='100%'
            >
              {product.title}
            </Chakra.Text>
            <Chakra.Text
              display={['none', 'block']}
              letterSpacing='1px'
              color={accentColor2}
              pos='absolute'
              bottom='4%'
              w='100%'
            >
              ${product.variants[0].price.amount.slice(0, 2)}
            </Chakra.Text>
          </Chakra.Box>
        );
      })}
    </Chakra.Grid>
  );
};

export default Gallery3x1;
