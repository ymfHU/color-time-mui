import {ReactNode} from 'react';

export interface OkButtonProps {
  getButtonAnimation?: any;
  onOk?: void;
  okText?: string;
  type?: string | undefined;
  primaryAnimation?: any;
  okDisabled?: boolean;
}

export interface CancelButtonProps {
  getButtonAnimation?: any;
  onCancel?: void;
  cancelText?: string;
  type?: string | undefined;
  secondaryAnimation?: any;
}

export interface SecondaryButtonProps {
  secondaryText?: string;
  onSecondaryAction?: any;
  secondaryActionIcon?: ReactNode;
}

export interface TertiaryButtonProps {
  tertiaryText?: string;
  onTertiaryAction?: any;
  tertiaryActionIcon?: ReactNode;
}
