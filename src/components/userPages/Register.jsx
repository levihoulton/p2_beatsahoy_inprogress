import * as React from 'react';
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Button, Box, Paper, Card, CardContent } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "../images/banner1.png";
import Logo from '../images/beats2.svg';
import ResponsiveAppBar from '../navbar/navbar';
import Footer from '../navbar/footer';

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

export default function Register(){
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


    const navigate = useNavigate();

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    


   

    const url = "https://beatsahoyp2.azurewebsites.net/"

    async function userReg(){
        

        const user = {
            
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            password: passwordInput.current.value,
           
        }
       

        
        try{
        const response = await axios.post(`${url}/register` , user)
        navigate("/login");
       
        console.log(response.data);
        //console.log(response)
        } catch(error){
            console.error(error.response.data);
                alert(error.response.data);
        }
        
    }

    return(
        <>
        <Paper style={styles.heroContainer}> 
        <ResponsiveAppBar/>
      <center><div className="App">
      <img src={Logo} alt="Logo" />
    

      <center>
     
     <Card sx={{ width: 400, height: 400 }}>
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
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
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
          <Button variant='contained' onClick={userReg}>Register</Button>
          
          </Box>
          </center>
          </CardContent>
          </Card>
          </center>
          </div>
          </center>
          <Footer />
          </Paper>
       
       


        </>
    )

}