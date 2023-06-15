import { store } from '../store/index';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';
import GlobalStyles from '../assets/styles/GlobalStyles';





export const AppProviders = ({ children }) => {
  return (
   <>
      <Router>
        <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
        </ThemeProvider>
      </Router>
    </>
  );
};


