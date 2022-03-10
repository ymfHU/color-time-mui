import Button from '@mui/material/Button';
import { OkButtonProps } from './types';

const OkButton = (props: OkButtonProps) => {
  const {
    getButtonAnimation,
    onOk,
    okText,
    type,
    primaryAnimation,
    okDisabled
  } = props;

  if (onOk === undefined) return null;
    return (
      <Button
        variant="contained"
        disabled={okDisabled}
        color={type === 'success' || type === 'error' ? 'secondary' : 'primary'}
        className={getButtonAnimation(primaryAnimation)}
        onClick={onOk}
        type="submit"
      >
        {okText}
      </Button>
    );
}

export default OkButton;
