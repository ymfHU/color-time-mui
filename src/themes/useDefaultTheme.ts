// @ts-nocheck
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// A custom theme for this app

export const useTheme = (props: { mode: PaletteMode | undefined }) => {
  const { mode } = props;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiPickerStaticWrapper: {
            styleOverrides: {
              root: {
                backgroundColor: 'unset',
              },
            },
          },
        },
      }),
    [mode]
  );
  return theme;
};
