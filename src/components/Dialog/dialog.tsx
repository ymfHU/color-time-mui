import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import { green, red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DialogProps } from './types';
import { OkButton, CancelButton, SecondaryButton, TertiaryButton } from './Buttons';

const DEFAULT_COLORS: any = {
  success: {
    style: {
      backgroundColor: green[800],
    },
  },
  error: {
    style: {
      backgroundColor: red[900],
    },
  },
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogWindow = (props: DialogProps) => {

  const {
    title,
    subTitle,
    children,
    onCancel,
    onOk,
    onClose,
    open,
    okText,
    cancelText,
    fullWidth,
    maxWidth,
    type,
    primaryAnimation,
    secondaryAnimation,
    okDisabled,
    secondaryText,
    onSecondaryAction,
    secondaryActionIcon,
    onTertiaryAction,
    tertiaryActionIcon,
    tertiaryText
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const getButtonAnimation = (animation: String):string => {
    return animation ? 'rounded ' + animation : 'rounded';
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      PaperProps={type ? DEFAULT_COLORS[type] : {}}
      onClose={onClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      className={type ? type : ''}
    >
      <form noValidate autoComplete="off">
      <DialogTitle>
        {title}
      </DialogTitle>
      {subTitle && (
        <Typography align={'center'} variant={'subtitle1'}>
          {subTitle}
        </Typography>
      )}
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <OkButton
          getButtonAnimation={getButtonAnimation}
          onOk={onOk}
          okText={okText}
          type={type}
          primaryAnimation={primaryAnimation}
          okDisabled={okDisabled}
        />
        <SecondaryButton
          secondaryText={secondaryText}
          onSecondaryAction={onSecondaryAction}
          secondaryActionIcon={secondaryActionIcon}
        />
        <TertiaryButton
          tertiaryText={tertiaryText}
          onTertiaryAction={onTertiaryAction}
          tertiaryActionIcon={tertiaryActionIcon}
        />
        <CancelButton
          getButtonAnimation={getButtonAnimation}
          onCancel={onCancel}
          cancelText={cancelText}
          type={type}
          secondaryAnimation={secondaryAnimation}
        />
      </DialogActions>

      </form>
    </Dialog>
  );
};

DialogWindow.propTypes = {
  title: PropTypes.any,
  subTitle: PropTypes.string,
  children: PropTypes.any,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  secondaryText: PropTypes.string,
  onSecondaryAction: PropTypes.func,
  secondaryActionIcon: PropTypes.any,
  open: PropTypes.bool,
  fullWidth: PropTypes.bool,
  okDisabled: PropTypes.bool,
  maxWidth: PropTypes.any,
  noDecoration: PropTypes.any,
  type: PropTypes.string,
  primaryAnimation: PropTypes.any,
  secondaryAnimation: PropTypes.any,
  tertiaryText: PropTypes.string,
  onTertiaryAction: PropTypes.func,
  tertiaryActionIcon: PropTypes.any,
};

DialogWindow.defaultProps = {
  title: '',
  cancelText: 'Disagree',
  okText: 'Agree',
  open: false,
  fullWidth: false,
  okDisabled: false,
  maxWidth: 'xl',
  noDecoration: false,
  primaryAnimation: false,
  secondaryAnimation: false,
};

export default DialogWindow;
