import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from '../../hooks';

const ColorList = () => {
    const colorList = useAppSelector(
        (state) => state.colorListStore.value
    );
    return (
        <Paper square sx={{ mb: '100px' }}>
            <List sx={{ mb: 2, pt: 0 }}>
                <React.Fragment >
                    <ListSubheader sx={{ bgcolor: 'background.paper', pt: 0 }}>
                        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2 }}>
                            ColorPoints
                        </Typography>
                    </ListSubheader>
                    {colorList.map(({ dateTime, color, points }, index) => (
                            <React.Fragment key={index}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: color, color: color }} />
                                    </ListItemAvatar>
                                    <ListItemText primary={new Date(dateTime).toString()} secondary={`Latitude: ${points.lat} | Longitude: ${points.long}`} />
                                </ListItem>
                            </React.Fragment>
                        )
                    )}
                </React.Fragment>
            </List>
        </Paper>
    );
}

export default ColorList;
