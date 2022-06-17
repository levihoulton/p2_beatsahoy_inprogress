import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', height: 255}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
    
  );
}