import * as React from 'react';
import * as Router from 'react-router-dom';
import * as Chakra from '@chakra-ui/react';
import Cart from './Cart';
import Footer from './Footer';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <Chakra.Box className='App' minH='100vh'>
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
