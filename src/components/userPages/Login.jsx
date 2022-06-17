import * as React from 'react';
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Button, Box, Paper, Card, CardContent, Grid, Stack, Avatar } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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

   


export default function CustomerLogin() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      
   
  
  const url = "https://beatsahoyp2.azurewebsites.net"
  const usernameInput = useRef();
  const passwordInput = useRef();
   //const [user, setUser] = useContext(userContext);
   const navigate = useNavigate();
  async function login() {
      const customer = {
          username: usernameInput.current.value,
          password: passwordInput.current.value,
      };
      if (customer.password === "admin") {
          navigate("/admin");
      } else {
          try {
              const response = await axios.post(`${url}/auth`, customer);
              console.log(response.data);
              // console.log("Hey this is the user prior ", user);
              // setUser({ ...user, username: customer.username });
              // console.log("This is after we set the user ", user);
              // the below code, manipulates the DOM
               //window.location.replace("http://localhost:3000/dashboard");
               navigate("/Dashboard");
          } catch (error) {
              console.error(error.response.data);
              alert(error.response.data);
          }
      }
  }
  return (
      <>
 
      

      <Paper style={styles.heroContainer}> 
      <center><div className="App">
      <img src={Logo} alt="Logo" />
    

      <center>
     
     <Card sx={{ width: 400, height: 250 }}>
      <CardContent>
     
     
          <center>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <br></br>
          <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          <br></br>
          <br></br>
          <Button variant='contained' onClick={login}>Login</Button>
          
          </Box>
          </center>
          </CardContent>
          </Card>
          </center>
          </div>
          </center>
          </Paper>
          
      </>
  );
}
