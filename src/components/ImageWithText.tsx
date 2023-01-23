// @ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import Button from './Button';
import { useNavigate } from 'react-router';

const ImageWithText: React.FC = ({ reverse, image, heading, text }) => {
  const navigate = useNavigate();
  const reverseSection = reverse ? 'row-reverse' : 'row';

  const { themeColor2, accentColor1 } = React.useContext<any>(ShopContext);

  return (
    <Chakra.Box>
      <Chakra.Flex flexDir={['column', reverseSection]} w='100%'>
        <Chakra.Image objectFit='cover' w={['100%', '50%']} src={image} />
        <Chakra.Flex
          w={['100%', '50%']}
          p='2rem'
          flexDir='column'
          justifyContent='center'
          alignItems='center'
        >
          <Chakra.Heading mb='2rem'>{heading}</Chakra.Heading>
          <Chakra.Text m='2rem' textAlign='center'>
            {text}
          </Chakra.Text>
          <Button
            text='Browse'
            textColor={accentColor1}
            bgColor={themeColor2}
            size={{ w: '10rem' }}
            onClick={() => navigate('/products')}
          />
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default ImageWithText;
