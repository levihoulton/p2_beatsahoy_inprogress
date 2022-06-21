import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@mui/material";
import {
    Security,
    Info,
    Headphones
} from "@mui/icons-material";

const Footer = () => <>
        
        <AppBar position="relative" elevation={0} component="footer" color="transparent" >
        <center>
        <Headphones sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'white', paddingTop: 7 }} />
                </center>
                
            <Toolbar style={{ justifyContent: "center", position: "flex" }}>
               
                <Typography variant="caption" color={"white"}>© Beats Ahoy 2022. All rights reserved.</Typography>
                
            </Toolbar>
        </AppBar>
    </>

export default Footer;