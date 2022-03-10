import Button from '@mui/material/Button';
import { SecondaryButtonProps } from './types';

const SecondaryButton = (props: SecondaryButtonProps) => {
  const {
    secondaryText,
    onSecondaryAction,
    secondaryActionIcon
  } = props;

  if (!secondaryText) return null;
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={onSecondaryAction}
        startIcon={secondaryActionIcon}
      >
        {secondaryText}
      </Button>
    );
}

export default SecondaryButton;
