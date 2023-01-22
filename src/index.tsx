//@ts-ignore
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
// import './index.css';
import ShopProvider from './context/shopContext';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <ChakraProvider>
    <ShopProvider>
      <Router>
        <App />
      </Router>
    </ShopProvider>
  </ChakraProvider>
);
