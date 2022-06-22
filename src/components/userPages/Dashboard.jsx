import * as React from 'react';
import { Paper } from '@mui/material';
import Image from "../images/banner1.png"
import MediaControlCard from './db2';
import TemporaryDrawer from '../navbar/drawer';
import Bottom from '../navbar/footer';
import Footer from '../navbar/footer';


const styles = {
    heroContainer: {
      height: 850,
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
   <Footer />
    </div>
    
    </Paper>
    
</>
  );
}