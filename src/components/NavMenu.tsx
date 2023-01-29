import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavMenu: React.FC = () => {
  const navigate = useNavigate();
  const { accentColor1, openMenu, closeMenu, isMenuOpen } =
    React.useContext<any>(ShopContext);

  React.useEffect(() => {
    if (document.getElementsByClassName('chakra-menu__menu-button')[1]) {
      document.getElementsByClassName('chakra-menu__menu-button')[1].remove();
    }
  }, []);

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
        <Chakra.MenuItem onClick={() => navigate('/')}>Home</Chakra.MenuItem>
        <Chakra.MenuItem onClick={() => navigate('/')}>
          Products
        </Chakra.MenuItem>
        <Chakra.MenuItem onClick={() => navigate('/')}>
          Featured Collection
        </Chakra.MenuItem>
        <Chakra.MenuItem onClick={() => navigate('/')}>About</Chakra.MenuItem>
        <Chakra.MenuItem onClick={() => navigate('/')}>Contact</Chakra.MenuItem>
      </Chakra.MenuList>
    </Chakra.Menu>
  );
};

export default NavMenu;
