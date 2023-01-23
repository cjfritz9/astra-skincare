import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import Button from './Button';
import { ShopContext } from '../context/shopContext';
import { useNavigate } from 'react-router';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { themeColor2, accentColor1 } = React.useContext<any>(ShopContext);
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
      <Chakra.Center pos='relative' bottom='100px'>
        <Button
          text='Shop Now'
          textColor={accentColor1}
          bgColor={themeColor2}
          size={{w: '10rem'}}
          onClick={() => navigate('/products')}
        />
      </Chakra.Center>
    </Chakra.Box>
  );
};

export default Hero;
