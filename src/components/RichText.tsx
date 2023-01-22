//@ts-nocheck
import * as React from 'react';
import * as Chakra from '@chakra-ui/react';

const RichText: React.FC = ({ heading, text, textColor, bgColor }) => {
  return (
    <Chakra.Box
      p='2rem'
      color={textColor ? textColor : 'black'}
      backgroundColor={bgColor ? bgColor : 'white'}
    >
      <Chakra.Flex flexDir='column' textAlign='center'>
        <Chakra.Heading py='2rem'>{heading}</Chakra.Heading>
        <Chakra.Text pb='2rem'>{text}</Chakra.Text>
      </Chakra.Flex>
    </Chakra.Box>
  );
};

export default RichText;
