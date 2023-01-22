import * as React from 'react';
import * as Router from 'react-router-dom';
import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router.Routes>
        <Router.Route path='/' element={<Home />} />
        <Router.Route path='/products/:handle' element={<ProductPage />} />
      </Router.Routes>
    </div>
  );
};

export default App;
