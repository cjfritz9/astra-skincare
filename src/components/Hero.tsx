import * as React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';

// import Button from './Button';
// import { ShopContext } from '../context/ShopContext';
// import { useNavigate } from 'react-router';
import { HeroProps } from '../models/Props';

const Hero: React.FC<HeroProps> = ({ bgColor, bgImage, heading }) => {
  // const navigate = useNavigate();
  // const { themeColor1, themeColor2, accentColor1 } =
  //   React.useContext<any>(ShopContext);

  return (
    <Stack
      paddingX='80px'
      justify='center'
      align='flex-start'
      spacing='10px'
      overflow='hidden'
      h={['500px', '700px', '900px']}
      objectFit='cover'
      bg={`${bgColor}, url(${bgImage})`}
    >
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='32px'
        width='698px'
        maxWidth='100%'
        boxShadow='Shadow/XL'
      >
        <Text
          fontFamily='Inter'
          lineHeight='1.2'
          fontWeight='bold'
          fontSize='16px'
          letterSpacing='0.1em'
          textTransform='uppercase'
          color='brand.Mint'
          alignSelf='stretch'
          pointerEvents='none'
        >
          NEW ASTRA SKIN CARE DROP
        </Text>
        <Text
          fontFamily='Marcellus'
          lineHeight='1'
          fontWeight='regular'
          fontSize={['32px', '48px', '64px']}
          color='#FFFFFF'
          alignSelf='stretch'
          pointerEvents='none'
        >
          {heading}
        </Text>
        <Button
          _active={{ transform: 'scale(0.98)' }}
          size='lg'
          bgColor='brand.Cream'
          color='UI.1'
        >
          Shop Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
