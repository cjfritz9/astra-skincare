import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const NavMenu: React.FC = () => {
  const { isMenuOpen, closeMenu } = React.useContext<any>(ShopContext);

  return (
    <Chakra.Drawer
      isOpen={isMenuOpen}
      onClose={closeMenu}
      placement='left'
      size='sm'
    >
      <Chakra.DrawerOverlay>
        <Chakra.DrawerContent>
          <Chakra.DrawerCloseButton />
          <Chakra.DrawerHeader>Menu</Chakra.DrawerHeader>
          <Chakra.DrawerBody>
            <Chakra.VStack p='2rem'>
              <Link to='/' onClick={() => closeMenu()}>
                Home
              </Link>
              <Link to='/' onClick={() => closeMenu()}>
                Home
              </Link>
              <Link to='/' onClick={() => closeMenu()}>
                Home
              </Link>
            </Chakra.VStack>
          </Chakra.DrawerBody>
          <Chakra.DrawerFooter textAlign='center'>
            <Chakra.Text>Placeholder</Chakra.Text>
          </Chakra.DrawerFooter>
        </Chakra.DrawerContent>
      </Chakra.DrawerOverlay>
    </Chakra.Drawer>
  );
};

export default NavMenu;
