import App from './App';
import GlobalStyle from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes';
import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/createStore';
import { Provider } from 'react-redux';

const AllProvider: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AllProvider;
