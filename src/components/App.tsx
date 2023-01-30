import * as React from 'react';
import * as Router from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import Cart from './Cart';
import Footer from './Footer';
import Navigation from './Navigation';
import NavMenu from './NavMenu';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import { ShopContext } from '../context/ShopContext';
import Products from './pages/Products';
import Announcement from './Announcement';

const App: React.FC = () => {
  const { accentColor1 } = React.useContext<any>(ShopContext);
  return (
    <Chakra.Box className='App' backgroundColor={accentColor1}>
      <Announcement />
      <Navigation />
       {/* <NavMenu /> */}
      <Cart /> 
      <Router.Routes>
        <Router.Route path='/' element={<Home />} />
        {/* <Router.Route path='/products' element={<Products />} />
        <Router.Route path='/products/:handle' element={<SingleProduct />} /> */}
      </Router.Routes>
      {/* <Footer /> */}
    </Chakra.Box>
  );
};

export default App;
