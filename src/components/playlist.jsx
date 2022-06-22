import * as React from 'react';
import { useContext, useEffect, useState} from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { ListGroup } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import { padding } from '@mui/system';
import { userContext } from '../App';
import TemporaryDrawer from './navbar/drawer';
import Image from "./images/banner1.png"


const styles = {
    heroContainer: {
      height: 1100,
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24,
    }
   };




export default function Playlists() {
    const [menuBody, setMenuBody] = useState([]);
    const [menuBodyRecent, setMenuBodyRecent] = useState([]);
    const [menu, setMenu] = useState(true);
    const [menuRecent, setMenuRecent] = useState(true);
    const [user, setUser] = useContext(userContext);
    const url = "https://beatsahoy.azurewebsites.net/playlists";
    console.log(user)
    useEffect(() => {
        findAll();
    }, [menu]);
    useEffect(() => {
        findAllRecent();
    }, [menuRecent]);
    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            console.log((`${url}`))
            const response = await fetch(`${url}`);
            const menus = await response.json();
            console.log(menus);
            const menuTableRows = menus.map((e) => {
                if (e.usernamePlaylist.username === user.username){
                    const url=e.url
                return (
                    <tr>
                        <a target="_blank" rel="noopener noreferrer" href={url}><td  width="200">{e.fieldFour}</td></a>
                    </tr>
                );
                }
            });
            setMenuBody(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }
    async function findAllRecent() {
        try {
            console.log((`${url}`))
            const response = await fetch(`${url}`);
            const menus = await response.json();
            console.log(menus);
            let total=0
            const Space ="  "
            const menuTableRows = menus.slice(0).reverse().map((e) => {
                
                if (total< 10){
                    const url=e.url
                    total=total+1
                return (
                    <tr>
                        <td>{e.usernamePlaylist.username}  </td>
                       
                        <a target="_blank" rel="noopener noreferrer" href={url}><td  width="200">{e.fieldFour}</td></a>
                    </tr>
                );
                
                }
            });
            setMenuBodyRecent(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
    }
    return (
    
       <>
       <Paper style={styles.heroContainer}>
       <TemporaryDrawer/>
       <Grid container spacing={6} paddingTop={5} paddingLeft={8} paddingRight={15}>
       <Grid item md={6}>
       <Card sx={{ bgcolor: '#F3E5F5', boxShadow: 5,
          borderRadius: 2, display: 'flex',  width:"5000" }}>
      <Box sx={{ display: 'flex' , flexDirection:"row"}}>
        <CardContent>
         <h2>Playlists</h2>
            {/* <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
        }}
        subheader={<li />}
        > */}
            
        <ListGroup>
            {menuBody}
        </ListGroup>
        {/* </List> */}
        </CardContent>
        </Box>
        </Card>
        </Grid>
        
         
        
       <Grid item md={6}>
       <Card sx={{ bgcolor: '#F3E5F5', boxShadow: 5,
          borderRadius: 2, display: 'flex',  width:"5000" }}>
      <Box sx={{ display: 'flex' , flexDirection:"row"}}>
        <CardContent>
         <h2>Recent Playlists</h2>
            <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
        }}
        subheader={<li />}
        >
            
        <ListGroup>
            {menuBodyRecent}
        </ListGroup>
        </List>
        </CardContent>
        </Box>
        </Card>
        </Grid>
        </Grid>
        </Paper>
        </>
    );
}