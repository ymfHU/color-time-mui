import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { ColorModeContext } from '../App';
import { BottomAppBarProps } from './types';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch } from '../../hooks';
import { resetColorList } from '../../stores/colorListSlice';
import { useSnackbar } from 'notistack';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const BottomAppBar = (props:BottomAppBarProps) => {
  const {isOpen, setIsOpen} = props;
  const dispatch = useAppDispatch();
  const colorMode = React.useContext(ColorModeContext);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const handleReset = (e: any) => {
    e.preventDefault();
    dispatch(
      resetColorList()
    )
    enqueueSnackbar('ColorPoints restored to default', {
      variant: 'warning',
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    });
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} >
      <Toolbar>
        <IconButton color="inherit" aria-label="toggle color" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <StyledFab color="secondary" aria-label="add" onClick={()=>{if (!isOpen) setIsOpen(true)}}>
          <AddIcon />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={handleReset}>
          <AutorenewIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default BottomAppBar;