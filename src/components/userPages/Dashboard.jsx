import * as React from 'react';
import { Paper } from '@mui/material';
import Image from "../images/banner1.png"
import MediaControlCard from './db2';
import TemporaryDrawer from '../navbar/drawer';


const styles = {
    heroContainer: {
      height: 700,
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24,
    }
   };

export default function Dashboard() {
  
  

  return (
    <>
    
    <Paper style={styles.heroContainer}> 
    <div>
        
        
    <TemporaryDrawer/>
       
     <MediaControlCard/>
    </div>
    </Paper>
</>
  );
}