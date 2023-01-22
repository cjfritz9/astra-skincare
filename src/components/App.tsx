import * as React from 'react';
import * as Router from 'react-router-dom';
import Cart from './Cart';
import NavBar from './NavBar';
import NavMenu from './NavMenu';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <NavBar />
      <NavMenu />
      <Cart />
      <Router.Routes>
        <Router.Route path='/' element={<Home />} />
        <Router.Route path='/products/:handle' element={<ProductPage />} />
      </Router.Routes>
    </div>
  );
};

export default App;
