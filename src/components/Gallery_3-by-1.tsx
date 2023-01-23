import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { Link, useNavigate } from 'react-router-dom';

type Gallery3x1Props = {
  heading?: string;
  padding?: {
    x?: string;
    y?: string;
  };
};

const Gallery3x1: React.FC<Gallery3x1Props> = ({ heading, padding }) => {
  const navigate = useNavigate();
  const { fetchAllProducts, products, accentColor2 } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Chakra.Box>
      <Chakra.Heading pl='1rem' mt='3rem' fontFamily='inherit'>
        {heading}
      </Chakra.Heading>
      <Chakra.Grid
        templateColumns='repeat(3, 1fr)'
        px={(padding && padding.x) || 0}
        py={(padding && padding.y) || 0}
      >
        {products.map((product: any, idx: number) => {
          if (idx > 2) return;
          if (window.location.href.includes(product.handle)) return;
          return (
            <Chakra.Box
              _hover={{ opacity: 0.9, transform: 'scale(1.02)' }}
              textAlign='center'
              pos='relative'
              key={product.id}
            > 
              <Chakra.Image
                onClick={() => navigate(`/products/${product.handle}`)}
                src={product.images[0].src}
              />

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
    </Chakra.Box>
  );
};

export default Gallery3x1;
