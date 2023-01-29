// @ts-ignore
import ReactDOM from 'react-dom/client';
import ShopProvider from './context/ShopContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App';
import theme from './context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <ChakraProvider theme={theme}>
    <ShopProvider>
      <Router>
        <App />
      </Router>
    </ShopProvider>
  </ChakraProvider>
);
