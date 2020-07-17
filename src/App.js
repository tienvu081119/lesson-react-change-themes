import React,{ useState }  from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
        <h1>It's a light theme!</h1>
      <footer>
      </footer>
    </>
  </ThemeProvider>
  );
}

export default App;
