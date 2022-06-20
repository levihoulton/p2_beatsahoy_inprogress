import * as React from 'react';
import { useContext, useEffect, useState} from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { userContext } from "../../App";
import List from '@mui/material/List';
import { ListGroup } from "react-bootstrap";
export default function MediaControlCard() {
  const theme = useTheme();
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
    <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex' , flexDirection:"column"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Album of the Week
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          "Un Verano Sin Ti" x Bad Bunny
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://charts-static.billboard.com/img/2022/05/bad-bunny-c3m-un-verano-sin-ti-3ib-344x344.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex' , flexDirection:"column"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Artist of the Week
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Harry Styles
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://charts-static.billboard.com/img/2017/04/harry-styles-psx-artist-chart-rzg-344x344.jpg"
        alt="Live from space album cover"
      />
     <Box sx={{ display: 'flex' , flexDirection:"column"}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Song of the Week
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          "Wait For U" x Future Featuring Drake & Tems
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://charts-static.billboard.com/img/1988/03/future-f8b-344x344.jpg"
        alt="Live from space album cover"
      />
       </Card>
       .
       .
       .
       .
       <h1>        </h1>
       <h1>        </h1>
       <h1>        </h1>
       <h1>        </h1>
       <h1>        </h1>

       <Card sx={{ display: 'flex',  width:"5000" }}>
      <Box sx={{ display: 'flex' , flexDirection:"row"}}>
        <CardContent>
        <h2>Your Playlists</h2>
          <List>
            {menuBody}
          </List>
        </CardContent>
       </Box>
       </Card>
       .
       .
       .
       .
       <h1>        </h1>
       <h1>        </h1>
       <h1>        </h1>
       <h1>        </h1>
       <h1>        </h1>
      <Card sx={{ display: 'flex',  width:"5000" }}>
      <Box sx={{ display: 'flex' , flexDirection:"row"}}>
        <CardContent>
          <h2>Recently Made Playlists</h2>
          <List>
            {menuBodyRecent}
          </List>
        </CardContent>
        
      </Box>
      </Card>
    </>
    
  );
}