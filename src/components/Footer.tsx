import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Chakra.Box backgroundColor='#FFA8E2'>
      <Chakra.Grid
        alignItems='center'
        color='white'
        fontWeight='bold'
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
      >
        <Chakra.VStack p='2rem'>
          <Link className='footer-link' to='/'>
            The Green Blast
          </Link>
          <Link className='footer-link' to='/'>
            The Blue Berry
          </Link>
          <Link className='footer-link' to='/'>
            Sustainability
          </Link>
        </Chakra.VStack>
        <Chakra.VStack p='2rem'>
          <Link className='footer-link' to='/'>
            About Us
          </Link>
          <Link className='footer-link' to='/'>
            Learn More
          </Link>
          <Link className='footer-link' to='/'>
            Sustainability
          </Link>
        </Chakra.VStack>
        <Chakra.Image
          justifySelf='center'
          maxH='10rem'
          width='fit-content'
          src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549'
        />
      </Chakra.Grid>
      <Chakra.Box>
        <Chakra.Text
          textAlign='center'
          color='white'
          w='100%'
          borderTop='1px solid white'
          p='1rem'
        >
          © Copyright www.siteworx-solutions.com
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  );
};

export default Footer;
