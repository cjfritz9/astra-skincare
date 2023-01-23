//@ts-ignore
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import ShopProvider from './context/shopContext';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@fontsource/mulish/400.css';

const theme = extendTheme({
  fonts: {
    heading: `'Mulish', sans-serif`,
    body: `'Mulish', sans-serif`
  }
});

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
