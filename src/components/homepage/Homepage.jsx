import { Button, Typography, Paper } from "@mui/material";
import React from "react";
import "./Homepage.css";
import Image from "../images/banner2.png";
import { positions } from "@mui/system";
import { BorderBottom } from "@mui/icons-material";

// import Header from "../header/header.jsx";

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


export default function HomePage() {
  return (
    <>
    <Paper style={styles.heroContainer}> 
    {/* <Header/> */}
       
          <div className="text">
          <Typography color="white" variant="h4"> Your Pocket Radio. </Typography>
          <Typography color="white" variant="h4">Customize. Share. Enjoy. </Typography>
          
    <br></br>
          
          <Button
              variant="contained"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderColor: "grey",
              }}
              href="/register"
            >
              Start Listening
            </Button>
            
            </div>
            
              </Paper>
     
        
     
    </>
  );
}