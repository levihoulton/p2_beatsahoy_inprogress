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
import { Link, Paper } from '@mui/material';
import Image from "../images/banner1.png"
import MediaControlCard from './db2';

const styles = {
    heroContainer: {
      height: 700,
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24,
    }
   };

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    
    left: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link color="inherit" href="profile">
        Profile
      </Link>, <Link color="inherit" href="friends">
        Friend List
      </Link>, <Link color="inherit" href="Dashboard">
        Dashboard
      </Link>].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[<Link color="inherit" href="playlists">
        Playlists
      </Link>, <Link color="inherit" href="questions">
        Develop a New Playlist
      </Link>].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Paper style={styles.heroContainer}> 
    <div>
        
        {['menu'].map((anchor) => (

        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true,
          }}
        
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
     <MediaControlCard/>
    </div>
    </Paper>
  );
}