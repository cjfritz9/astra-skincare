import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import Button from './Button';
import { ShopContext } from '../context/shopContext';
import { useNavigate } from 'react-router';
import { HeroProps } from '../models/Props';

const Hero: React.FC<HeroProps> = ({
  bgColor,
  bgImage,
  heading,
  showBtn = false
}) => {
  const navigate = useNavigate();
  const { themeColor1, themeColor2, accentColor1 } =
    React.useContext<any>(ShopContext);
  return (
    <Chakra.Box backgroundColor={bgColor} h='70vh' w='100%' position='relative'>
      <Chakra.Image
        h='100%'
        m='auto'
        objectFit='contain'
        objectPosition={['top', 'center']}
        src={bgImage}
      />
      <Chakra.Heading
        className='fade-in'
        pos='absolute'
        bottom='20%'
        w='100%'
        textAlign='center'
        color={accentColor1}
        fontWeight='bold'
        fontSize={['3rem', '3rem', '5rem']}
        textShadow={`${themeColor1} 1px -2px 4px`}
      >
        {heading}
      </Chakra.Heading>
      {showBtn ? (
        <Chakra.Center pos='relative' bottom='100px'>
          <Button
            text='Shop Now'
            textColor={accentColor1}
            bgColor={themeColor2}
            size={{ w: '10rem' }}
            onClick={() => navigate('/products')}
          />
        </Chakra.Center>
      ) : null}
    </Chakra.Box>
  );
};

export default Hero;
