//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

type RichTextProps = {
  heading?: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
};

const RichText: React.FC<RichTextProps> = ({
  heading,
  text,
  textColor,
  bgColor
}) => {
  return (
    <Chakra.Box
      p='2rem'
      color={textColor || 'black'}
      backgroundColor={bgColor || 'white'}
    >
      <Chakra.Flex flexDir='column' textAlign='center'>
        <Chakra.Heading py='2rem'>
          {heading || 'Placeholder Heading'}
        </Chakra.Heading>
        <Chakra.Text px={['2rem', '4rem']}>
          {text ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolorem.'}
        </Chakra.Text>
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default RichText;
