import { Button, Typography, Paper } from "@mui/material";
import React from "react";
import "./Homepage.css";
import Image from "../images/banner2.png";
import { positions } from "@mui/system";
import { BorderBottom } from "@mui/icons-material";
import ResponsiveAppBar from "../navbar/navbar";
import Image2 from "../images/footer.png"
import Box from "@mui/material/Box";
import Footer from "../navbar/footer";


// import Header from "../header/header.jsx";

const styles = {
  heroContainer: {
    height: 900,
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    margin: -24,
    padding: 24,
  }
 };


export default function HomePage() {
  return (
    <>
    <ResponsiveAppBar />
    <Paper style={styles.heroContainer}> 
   
       
          
          <Typography color="white" variant="h4" position={'flex'} paddingLeft={95} paddingTop={60}> Your Pocket Radio. <br></br> Customize. Share. Enjoy.<br></br> <Button variant="contained" sx={{color: "black", backgroundColor: "white", borderColor: "grey"}}
              href="/register"
            >
              Start Listening
            </Button></Typography>
          
          
    <br></br>
          
         
            
            
    
              </Paper>
              
              
              
        
     
    </>
  );
}