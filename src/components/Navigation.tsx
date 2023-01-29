import * as React from 'react';
import { Stack, Image, Text, Icon, Flex } from '@chakra-ui/react';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { IoBagOutline } from 'react-icons/io5';
import logo from '../assets/astra-logo.png';

const Navigation: React.FC = () => {
  // const navigate = useNavigate();
  // const { openCart, checkout } = React.useContext<any>(ShopContext);

  // const getCartItemQty = (): string => {
  //   console.log('render');
  //   let cartItemQty = 0;
  //   checkout.lineItems?.forEach((item: any) => {
  //     if (cartItemQty >= 9) return;
  //     cartItemQty += item.quantity;
  //   });
  //   if (cartItemQty === 9) {
  //     return cartItemQty.toString();
  //   } else if (cartItemQty > 9) {
  //     return '9+';
  //   } else {
  //     return cartItemQty.toString();
  //   }
  // };

  // React.useEffect(() => {
  //   getCartItemQty();
  // }, [checkout]);

  return (
    <Flex
      paddingX='40px'
      paddingY='16px'
      justifyContent='space-between'
      alignItems='center'
      width='100vw'
      background='UI.5'
      boxShadow='Shadow/Sm'
    >
      <Image w='156px' h='56px' objectFit='cover' src={logo} />
      <Stack
        direction='row'
        justify='space-between'
        // align='flex-start'
        spacing='40px'
        // flex='1'
      >
        <Text
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='Brand.Black/Default'
        >
          Skincare Products
        </Text>
        <Text
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='Brand.Black/Default'
        >
          Beauty Tools
        </Text>
        <Text
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='Brand.Black/Default'
        >
          Skin Concerns
        </Text>
        <Text
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='Brand.Black/Default'
        >
          Skincare Resources
        </Text>
        <Text
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='Brand.Black/Default'
        >
          Help Me Choose
        </Text>
        <Text
          fontFamily='Inter'
          px={['0px', '0px', '0px', '0px', '0px', '1rem']}
          lineHeight='1.5'
          fontWeight='medium'
          fontSize='18px'
          color='Brand.Black/Default'
        >
          Why Astra
        </Text>
      </Stack>
      <Stack direction='row' justify='flex-end' align='center' spacing='16px'>
        <Icon as={BsSearch} />
        <Icon as={BsPerson} />
        <Icon as={IoBagOutline} />
      </Stack>
    </Flex>
  );
};

export default Navigation;
