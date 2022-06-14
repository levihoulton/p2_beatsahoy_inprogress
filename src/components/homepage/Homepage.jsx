import { Button } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import './Homepage.css';
import Register from '../userPages/Register';  


     
      export default function HomePage() {
        return (
          <>
          <div className="HomePage">
            <header className="Home">
              <img src="http://localhost:3000/banner2.png" alt="Background" 
                size="object-fit:cover" width="100%" height="100%"></img>
                <h1> Your Pocket Radio. </h1>
                <h2>Customize. Share. Enjoy. </h2>
            </header>
          </div>
        <Button
  variant='contained'
  sx={{ color: 'white', backgroundColor: 'black', borderColor: 'grey' }} onClick={ () => Navigate("/Register")}
>
     Start Listening     
</Button>
        </>
        );
      }