import App from './App';
import GlobalStyle from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes';
import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

const AllProvider: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AllProvider;
