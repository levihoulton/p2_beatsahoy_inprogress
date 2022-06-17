import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Button, Box, Paper, Card, CardContent, Typography, Grid } from "@mui/material";
import Image from "../images/banner1.png";
import Logo from '../images/beats2.svg';

const styles = {
    heroContainer: {
      height: 800,
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24,
    }
   };




export default function Aboutpage(){

    const navigate = useNavigate ();

    return(
        <>
        <Paper style={styles.heroContainer}> 
      <center><div className="App">
      <img src={Logo} alt="Logo" />
        <center>
        <Card sx={{ width: 800, height: 300 }}>
      <CardContent>
      
     
     
          
        
           <p> <Typography variant="h3">About Beats Ahoy</Typography></p>

           <hr/>

           <p> <Typography align="left" variant="h6">Beats Ahoy is an application that allows you to discover new music in a unique way. 
            Our application will include several aspects that lets you personalize, create, and change the music recommendations that you receive. 
            Our application leverages Spotify's API to help curate a unique playlist with the help of a short questionnaire based off your mood and 
            vibe.</Typography></p>

     
     

     
       
       </CardContent>
       </Card>
       </center>
       </div>
          </center>
          </Paper>
        </>
    );
}