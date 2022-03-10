import { createContext, useMemo, useState } from 'react'
import { Provider } from 'react-redux';
import { store } from '../../store';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import BottomAppBar from '../BottomAppBar';
import ColorList from '../ColorList';
import Edit from '../ColorList/Edit';
import { useTheme } from '../../themes/useDefaultTheme';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {
  const [isOpen, setIsOpen] = useState(false);

  /* This is a way to set the color mode based on the operating system settings. */
  const [mode, setMode] = useState<'light' | 'dark'>(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');

  /* Using the `useTheme` hook to get the theme object. */
  const theme = useTheme({ mode });

  /* This is a memoization technique. It means that the value of `colorMode` is only calculated once
  and then stored in the memory. */
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <SnackbarProvider maxSnack={3} autoHideDuration={4000}>
            <ColorList />
            <Edit isOpen={isOpen} setIsOpen={setIsOpen} />
            <BottomAppBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </SnackbarProvider>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
