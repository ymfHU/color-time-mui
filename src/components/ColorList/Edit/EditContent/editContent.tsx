import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import { HexColorPicker } from 'react-colorful';
import {EditContextProps} from './types';

const EditContent = (props: EditContextProps) => {
  const {
    dateTime,
    setDateTime,
    color,
    setColor,
    lat,
    setLat,
    long,
    setLong
  } = props;

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12}>
        <Typography variant="body1">Here comes some helping information</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Grid container spacing={2} direction="column">
        <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                label="Date Time"
                value={dateTime}
                onChange={(newValue) => {
                  setDateTime(newValue);
                }}
                renderInput={(params) => <TextField fullWidth={true} {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item>
            <TextField
              fullWidth={true}
              label="Latitude"
              type="number"
              value={lat}
              onChange={(e)=>{setLat(e.target.value)}}
              name="lat"
              id="lat"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth={true}
              label="Longitude"
              type="number"
              value={long}
              onChange={(e)=>{setLong(e.target.value)}}
              name="long"
              id="long"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth={true}
              label="Color"
              type="string"
              value={color}
              //onChange={handleChange}
              name="color"
              id="color"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <HexColorPicker color={color} onChange={setColor} style={{width: '100%', height: '272px'}}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditContent;
