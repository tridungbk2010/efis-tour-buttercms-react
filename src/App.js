import React from 'react';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import { AppProvider } from './context/app-context';

function App() {
  return (
    <ThemeProvider theme={{ fontFamily: 'Nunito, sans-serif' }}>
      <div className="App">
        <GlobalStyle />
        <AppProvider>
          <Routes />
        </AppProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
