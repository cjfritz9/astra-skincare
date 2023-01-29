//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import Hero from '../Hero';
import ImageWithText from '../ImageWithText';
import RichText from '../RichText';
import Gallery3x1 from '../Gallery_3-by-1';
import Announcement from '../../Announcement';

import heroImage from '../../assets/astra-hero.jpg';

const Home: React.FC = () => {
  const { themeColor1, accentColor1 } = React.useContext<any>(ShopContext);

  return (
    <Chakra.Box>
      <Hero
        bgColor='linear-gradient(91deg, #000000 0%, #00000000 100%)'
        bgImage={heroImage}
        heading='Unlock 24-7 Hydration with a New Clinically Proven Formula'
      />
      {/* <RichText
        heading="The relaxation you've been waiting for"
        text="Settle in for a good soak with an original BathBombs invention, exploding with essential oils and tons of fizzy fun. Whether you're after a relaxing, petal-laden floral soak or an invigorating multilayered explosion of color and scent, there's a handmade bath bomb perfect for every bathing experience."
      />
      <Gallery3x1 />
      <RichText
        heading="There's no angry way to say bubbles"
        text="We're here to spread more joy by offering you a range of little delights to add to your daily ritual."
        textColor={accentColor1}
        bgColor={themeColor1}
      />
      <ImageWithText
        heading='Relax'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758'
      />
      <ImageWithText
        reverse={true}
        heading='Unwind'
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee. "
        image='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758'
      /> */}
    </Chakra.Box>
  );
};

export default Home;
