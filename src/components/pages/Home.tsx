//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/shopContext';
import Hero from '../Hero';
import ImageWithText from '../ImageWithText';
import RichText from '../RichText';

const Home: React.FC = () => {
  const { fetchAllProducts, products } = React.useContext<any>(ShopContext);

  React.useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Chakra.Box>
      <Hero />
      <RichText
        heading="The relaxation you've been waiting for"
        text="Settle in for a good soak with an original BathBombs invention, exploding with essential oils and tons of fizzy fun. Whether you're after a relaxing, petal-laden floral soak or an invigorating multilayered explosion of color and scent, there's a handmade bath bomb perfect for every bathing experience."
      />
      <Chakra.Grid templateColumns='repeat(3, 1fr)'>
        {products.map((product: any) => {
          return (
            <Chakra.Box
              _hover={{ opacity: 0.9, transform: 'scale(1.01)' }}
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
                bottom='16%'
                w='100%'
              >
                {product.title}
              </Chakra.Text>
              <Chakra.Text
                letterSpacing='1px'
                color='gray.500'
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
      <RichText
        heading="There's no angry way to say bubbles"
        text="We're here to spread more joy by offering you a range of little delights to add to your daily ritual."
        textColor="white"
        bgColor="#FFA8E2"
      />
      <ImageWithText
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
        heading='Heading'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
      <ImageWithText
        reverse
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758'
        heading='Second Heading'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
      />
    </Chakra.Box>
  );
};

export default Home;
