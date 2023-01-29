import * as React from 'react';
import { Stack, Text } from '@chakra-ui/react';

const Announcement: React.FC = () => (

  <Stack
    paddingY='6px'
    direction='row'
    justify='center'
    align='center'
    spacing='0px'
    overflow='hidden'
    width='100vw'
    // maxWidth='100%'
    background='brand.Peri'
  >
    <Text
      fontFamily='Inter'
      lineHeight='1.5'
      fontWeight='medium'
      fontSize='18px'
      color='#FFFFFF'
      textAlign='center'
    >
      Free Shipping on all $50 purchases
    </Text>
  </Stack>
);

export default Announcement;
