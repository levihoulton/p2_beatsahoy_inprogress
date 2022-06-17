import axios from "axios";
import { Button, Slider, Box, Card, CardContent, Paper, TextField, MenuItem, InputLabel, FormControl, Select } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState, useRef } from "react";
import { userContext } from "../../App";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Image from "../images/banner1.png"


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

export default function Quiz(props) {

 


    
    const url = "http://localhost:9005";

    //const energyInput = useRef();
    const activityInput = useRef();
    const weatherInput = useRef();
    const vibeInput = useRef();
    // const genreInput = useRef();
    
    const playlistInput = useRef();
    const [user, setUser] = useContext(userContext);
    console.log(user.username)
    const [token, setToken] = useState()
    const [token1, setToken1] = useState()
    const [songUriList, setSongUriList] = useState()
    const [playlistData, setPlaylist] = useState()
    const [genreInput, setGenreInput] = useState();
    const handleChange = (event) => {
      setGenreInput(event.target.value);
    };

    const [energyInput, setEnergyInput] = useState();
    const handleEnergyChange = event => {
      setEnergyInput(event.target.value);
    }

   

    const timeMarks = [
      {
        value: 0.1,
        label: 'Waking Up',
      },
      {
        value: 0.45,
        label: 'Hitting Gym',
      },
      {
        value: 0.9,
        label: 'PARTAY TIME',
      },
    ];

    const [timeInput, setTimeInput] = useState();
    const handleTimeChange = event => {
      setTimeInput(event.target.value);
    }

    const energyMarks = [
      {
        value: 0.1,
        label: 'Sleepy',
      },
      {
        value: 0.45,
        label: 'Chill',
      },
      {
        value: 0.9,
        label: 'PUMPED',
      },
    ];

    const [sponInput, setSponInput] = useState();
    const handleSponChange = event => {
      setSponInput(event.target.value);
    }

    const sponMarks = [
      {
        value: 0.1,
        label: 'Adventurous',
      },
      {
        value: 0.9,
        label: 'Content',
      },
    ];

    const [moodInput, setMoodInput] = useState();
    const handleMoodChange = event => {
      setMoodInput(event.target.value);
    }

    const moodMarks = [
      {
        value: 0.1,
        label: 'Sad',
      },
      {
        value: 0.9,
        label: 'Happy',
      },
    ];
    


    const getToken = async () => {
        const clientId = '5989356fb1824b5c987ccec7d8c37b02';
        const clientSecret = '81621248141f4d69adebc60a727fea99';

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
      });

        const data = await result.json();
        console.log(data.access_token)
        setToken(data.access_token)
    }
    const getToken1 = async () => {
      const clientId = '5989356fb1824b5c987ccec7d8c37b02';
      const clientSecret = '81621248141f4d69adebc60a727fea99';

      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
          },
          body: {
            grant_type: 'client_credentials',
            scope: "playlist-modify-private user-library-read",
          }
      });

      const data = await result.json();
      console.log(data.access_token)
      setToken1(data.access_token)
  }
    
    
    //get the recommended songs
    const getRecommended = async () => {
        getToken()
        console.log(token)

        const playlist = {
          usernamePlaylist: user.username,
          url: "www.test.com",
          fieldOne: genreInput.current.value,
          fieldTwo: energyInput,
          fieldThree: timeInput,
          fieldFour: sponInput,
          fieldFive: moodInput,
      };
        const url = "https://api.spotify.com/v1/recommendations?limit=30&market=ES&seed_genres="+playlist.fieldOne+"&target_energy="+playlist.fieldTwo+"&target_liveness="+playlist.fieldThree+"&min_popularity="+playlist.fieldFour+"&min_valence"+playlist.fieldFive
        console.log(url)
        const result = await fetch(`${url}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        console.log(data.tracks)
          for (let i = 0; i < data.tracks.length; i++){
            console.log(data.tracks[i].name + "By: "+ data.tracks[i].artists[0].name)
          }
    }

    const generatePlaylist = async () => {
      const datalist = {
        name: playlistInput.current.value,
        description: "New playlist description",
        public: true
    };

      const result = await axios.post('https://accounts.spotify.com/api/token',datalist, {
          method: 'POST',
          headers: { 'Authorization' : 'Bearer ' + token1
          }, 
      });

      const data = await result.json();
      console.log(data)
    }
    
    const addPlaylist = async () => {
      generatePlaylist()
      getRecommended()
      console.log(songUriList)
      const tokenTemp ="BQDQdeFuP2cFyCrkyu9WQV_CEnGFg7Fv7gBo5UGhvI8tNOGUzTv1AiUPQrofYjDixJPLEd67_i7i4DkNikiP-_fCXJQo9harDePPnMRUkkvbSCN569yN-mhK0MQogIucgTrJkK6uMndzsKjLVQMXm6PnjkCNh3rUK2N5NMlJs_g60LHFzrsl4nr4ui1juywFmnLaFlV8bxzCYtXjAlQvMa4ZKBHDYpz55yTpj2YvnFdKxRQ9gI-2nHTUkf3o-mtpZDsj"
      let baseURL = "https://api.spotify.com/v1/playlists/" + playlistData + "/tracks"
      console.log(baseURL)
      try {
        const result = await axios.post(`${baseURL}`,songUriList,{
            headers: { 'Authorization' : 'Bearer ' + tokenTemp
            }, 
        });
        const data = result.data;
        console.log(data)
      } catch(error){
        console.error(error);
        //alert(error.result.data);
    }
  }

    // async-await
    async function createPlaylist() {
     
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
         const playlist = {
             usernamePlaylist: user.username,
             url: "www.test.com",
             fieldOne: genreInput.current.value,
             fieldTwo: energyInput.current.value,
             fieldThree: activityInput.current.value,
             fieldFour: weatherInput.current.value,
             fieldFive: "test",
         };
        
         

        console.log(playlist);
         try {
            const response = await axios.post(`${url}/addPlaylist`, playlist, {withCredentials: true});
            console.log(response.data);
              //console.log(response)
              } catch(error){
                  console.error(error.response.data);
                  //alert(error.response.data);
              }
            
    }
  
    return (
     <>
     <Paper style={styles.heroContainer}>

    
     
        <center>
        
       
        <Card sx={{ width: 600, height: 800 }}>
      <CardContent>
      
      
        <center>

       

          <Typography variant="h3">Playlist Quiz</Typography>
        <hr/>
        
        <Typography variant="h6">Name of Playlist?</Typography>
        <br></br>
        <TextField id="standard-basic" label="" variant="standard" />
        
        <br></br>
        <br></br>
       
        <Typography variant="h6">Genre</Typography>
        

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label"> </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={genreInput}
          onChange={handleChange}
          label=""
        >
          
          <MenuItem value="pop">Pop</MenuItem>
          <MenuItem value="hip-hop">Hip Hop</MenuItem>
          <MenuItem value="country">Country</MenuItem>
          <MenuItem value="rock">Rock</MenuItem>
          <MenuItem value="edm">EDM</MenuItem>
          <MenuItem value="dubstep">Dubstep</MenuItem>
          <MenuItem value="indie">Indie</MenuItem>
          <MenuItem value="r-n-b">R-N-B</MenuItem>
          
        </Select>
      </FormControl>
          
        {/* <select name="dropdown" ref={genreInput} id="dropdown">
          <option value="pop" >Pop</option>
          <option value="hip-hop" >Hip Hop</option>
          <option value="country" >Country</option>
          <option value="rock" >Rock</option>
          <option value="edm" >EDM</option>
          <option value="dubstep" >dubstep</option>
          <option value="indie" >Indie</option>
          <option value="r-n-b" >R-N-B</option>
        </select> */}
       
        <br></br>
        <br></br>
       
        <Typography variant="h6">What is your current energy level?</Typography>
          {/* <div >
          <select name="dropdown1" ref={energyInput} id="dropdown1">
          <option value="0.1" >Low/Sleepy</option>
          <option value="0.3" >relaxed/chill</option>
          <option value="0.6" >pretty energetic</option>
          <option value="0.9" >PUMPED/super high energy</option>
          </select>
            <div> */}
          <Slider sx={{ width: 250, alignItems: 'center' }}
            getarialabel="Energy"
            defaultValue={3}
            //getAriaValueText={value}
            valueLabelDisplay="auto"
            step={0.1}
            marks={energyMarks}
            min={0.1}
            max={0.9}
            value={energyInput}
            onChange={handleEnergyChange}
          />

<br></br>
<br></br>

<Typography variant="h6">What are you doing right now?</Typography>
  
    {/* <select name="dropdown3" ref={activityInput} id="dropdown3">
          <option value="0.3" >Waking up</option>
          <option value="0.6" > Hitting Gym</option>
          <option value="0.9" >Partying</option>
          </select> */}
          <Slider sx={{ width: 250, alignItems: 'center' }}
            getarialabel="Time"
            defaultValue={3}
            //getAriaValueText={value}
            valueLabelDisplay="auto"
            step={0.1}
            marks={timeMarks}
            min={0.1}
            max={0.9}
            value={timeInput}
            onChange={handleTimeChange}
          />
    
    
  <br></br>
  <br></br>
  
          <p>{props.question3}</p>
          <Typography variant="h6">How spontaneous are you feeling?</Typography>
  
  <Slider sx={{ width: 250, alignItems: 'center' }}
            getarialabel="Spon"
            defaultValue={3}
            //getAriaValueText={value}
            valueLabelDisplay="auto"
            step={0.1}
            marks={sponMarks}
            min={0.1}
            max={0.9}
            value={sponInput}
            onChange={handleSponChange}
          />
  
    <br></br>
    <br></br>
 
    <Typography variant="h6">What is your mood?</Typography>
    <Slider sx={{ width: 250, alignItems: 'center' }}
            getarialabel="Mood"
            defaultValue={3}
            //getAriaValueText={value}
            valueLabelDisplay="auto"
            step={0.1}
            marks={moodMarks}
            min={0.1}
            max={0.9}
            value={moodInput}
            onChange={handleMoodChange}
          />
    
      <br></br><br></br>
      
       <Button variant="contained" onClick={addPlaylist}>Submit</Button>

       
          </center>
          
          </CardContent>
          </Card>
          
          </center>
          
          </Paper>
    </>  
    );
  }
  