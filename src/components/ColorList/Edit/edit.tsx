import { useState } from 'react';
import { addColor } from '../../../stores/colorListSlice';
import Dialog from '../../Dialog';
import EditContent from './EditContent';
import { EditProps } from './types';
import { useAppDispatch } from '../../../hooks';
import { useSnackbar } from 'notistack';

const Edit = (props: EditProps) => {
  const {isOpen, setIsOpen} = props;
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [color, setColor] = useState<string>("#b32aa9");
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  /**
   * It adds a color point to the store.
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const handleOk = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    dispatch(
      addColor({
        color: color,
        dateTime: dateTime.getTime(),
        points: {lat: 47.454554, long: 12.21121}
      })
    )
    enqueueSnackbar('ColorPoint saved', {
      variant: 'success',
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    });
    setIsOpen(false);
  };

  /**
   * It takes an event as an argument, and it prevents the default action of the event from happening
   * and close the Edit modal
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const handleClose = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <Dialog
    title={'Add ColorPoint'}
    open={isOpen}
    onClose={handleClose}
    onCancel={handleClose}
    cancelText="Cancel"
    onOk={handleOk}
    okText="Save"
    maxWidth='sm'
  >
    <EditContent
      color= {color}
      setColor= {setColor}
      dateTime= {dateTime}
      setDateTime= {setDateTime}
      lat= {lat}
      setLat= {setLat}
      long= {long}
      setLong= {setLong}
    />
  </Dialog>
);
};

export default Edit;
