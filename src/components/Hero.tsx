import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

const Hero: React.FC = () => {
  return (
    <Chakra.Box backgroundColor='#FFA8E2' h='70vh' w='100%' position='relative'>
      <Chakra.Image
        h='100%'
        m='auto'
        objectFit='contain'
        objectPosition={['top', 'center']}
        src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-4_-_nobg_1.png?v=1610055851.jpg'
      />
      <Chakra.Text
        className='fade-in'
        pos='absolute'
        bottom='20%'
        w='100%'
        textAlign='center'
        color='white'
        fontWeight='bold'
        fontSize={['3rem', '3rem', '5rem']}
        textShadow='#FFA8E2 0px 0px 4px'
      >
        Stress Ends Here
      </Chakra.Text>
      <Chakra.Center>
        <Chakra.Button
          backgroundColor='#FF38BD'
          w='10rem'
          _hover={{ opacity: 0.9 }}
          _active={{ transform: 'scale(0.98)' }}
          position='absolute'
          bottom='10%'
        >
          Shop Now
        </Chakra.Button>
      </Chakra.Center>
    </Chakra.Box>
  );
};

export default Hero;
