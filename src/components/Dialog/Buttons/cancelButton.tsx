import Button from '@mui/material/Button';
import { CancelButtonProps } from './types';

const CancelButton = (props: CancelButtonProps) => {
  const {
    getButtonAnimation,
    onCancel,
    cancelText,
    type,
    secondaryAnimation,
  } = props;

  if (onCancel === undefined) return null;
    return (
      <Button
        variant="contained"
        color={type === 'success' || type === 'error' ? 'secondary' : 'primary'}
        className={getButtonAnimation(secondaryAnimation)}
        onClick={onCancel}
      >
        {cancelText}
      </Button>
    );
}

export default CancelButton;
