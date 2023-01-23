import * as React from 'react';
import * as Router from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import Cart from './Cart';
import Footer from './Footer';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import Home from './pages/Home';
import ProductPage from './pages/SingleProduct';
import { ShopContext } from '../context/shopContext';

const App: React.FC = () => {
  const { accentColor1 } = React.useContext<any>(ShopContext);
  return (
    <Chakra.Box className='App' minH='100vh' backgroundColor={accentColor1}>
      <NavBar />
      <NavMenu />
      <Cart />
      <Router.Routes>
        <Router.Route path='/' element={<Home />} />
        <Router.Route path='/products/:handle' element={<ProductPage />} />
      </Router.Routes>
      <Footer />
    </Chakra.Box>
  );
};

export default App;
