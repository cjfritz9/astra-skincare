import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const { accentColor1, openMenu, closeMenu, isMenuOpen } =
    React.useContext<any>(ShopContext);

  return (
    <Chakra.Menu isLazy onOpen={() => openMenu()} onClose={() => closeMenu()}>
      <Chakra.MenuButton>
        <Chakra.Icon
          fill={accentColor1}
          w={30}
          h={30}
          cursor='pointer'
          as={isMenuOpen ? ReactIcons.MdMenuOpen : ReactIcons.MdMenu}
        />
      </Chakra.MenuButton>
      <Chakra.MenuList>
        <Chakra.MenuItem>Download</Chakra.MenuItem>
        <Chakra.MenuItem>Create a Copy</Chakra.MenuItem>
        <Chakra.MenuItem>Mark as Draft</Chakra.MenuItem>
        <Chakra.MenuItem>Delete</Chakra.MenuItem>
        <Chakra.MenuItem onClick={() => navigate('/')}>
          Attend a Workshop
        </Chakra.MenuItem>
      </Chakra.MenuList>
    </Chakra.Menu>
  );
};

export default NavMenu;
