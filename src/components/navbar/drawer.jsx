import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Typography } from '@mui/material';
import Profile from '../profile';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      
    >
      <List>
        <Button href='/profile'><Typography variant='body1' color={'black'} paddingLeft={3}>Profile</Typography></Button>
       
      </List>
      <List>
        <Button href='/dashboard'><Typography variant='body1' color={'black'} paddingLeft={3}>Dashboard</Typography></Button>
       
      </List>
      <Divider />
      <List>
      <Button href='/playlists'><Typography variant='body1' color={'black'} paddingLeft={3}>Playlists</Typography></Button>
       
      </List>
      <List>
        <Button href='/friends'><Typography variant='body1' color={'black'} paddingLeft={3}>Friends List</Typography></Button>
       
      </List>
      <List>
       <Button href='/questions'><Typography variant='body1' color={'black'} paddingLeft={3}>Playlist Quiz</Typography></Button>
       
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <HeadphonesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'white' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            BeatsAhoy
          </Typography>
</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}