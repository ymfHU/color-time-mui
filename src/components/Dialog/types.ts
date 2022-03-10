import { Breakpoint, ModalProps } from "@mui/material";

export interface DialogProps {
  title?: string;
  subTitle?: string;
  children?: any;
  onCancel?: void | any;
  onOk?: void | any;
  onClose?: ModalProps['onClose'] | any;
  open: boolean;
  okText?: string;
  cancelText?: string;
  fullWidth?: boolean;
  maxWidth?: Breakpoint | false;
  type?: string;
  primaryAnimation?: any;
  secondaryAnimation?: any;
  okDisabled?: boolean;
  secondaryText?: string;
  onSecondaryAction?: void;
  secondaryActionIcon?: any;
  onTertiaryAction?: void;
  tertiaryActionIcon?: any;
  tertiaryText?: string;
}
