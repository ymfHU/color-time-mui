import Button from '@mui/material/Button';
import { TertiaryButtonProps } from './types';

const TertiaryButton = (props: TertiaryButtonProps) => {
  const {
    tertiaryText,
    onTertiaryAction,
    tertiaryActionIcon
  } = props;

  if (!tertiaryText) return null;
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={onTertiaryAction}
        startIcon={tertiaryActionIcon}
      >
        {tertiaryText}
      </Button>
    );
}

export default TertiaryButton;
