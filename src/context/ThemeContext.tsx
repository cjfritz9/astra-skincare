import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      Peri: '#8897AA',
      Cream: '#F7F2EE',
      Mint: '#8EC2B9'
    },
    UI: {
      1: '#4D4B49',
      2: '#807D7A',
      3: '#B3AFAB',
      4: '#E6E0DC',
      5: '#F7F2EE',
      6: '#FFFFFF'
    }
  },
  fonts: {
    Heading: 'Marcellus',
    Body: 'Poppins',
    Alt: 'Inter'
  }
});

export default theme;
