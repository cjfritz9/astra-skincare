// @ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

const ImageWithText: React.FC = ({ reverse, image, heading, text }) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';

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
          <Chakra.Button w='10rem' backgroundColor='#FF38BD' color='white' _hover={{opacity: 0.9}} _active={{transform: 'scale(0.98)'}}>
            Browse
          </Chakra.Button>
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default ImageWithText;
