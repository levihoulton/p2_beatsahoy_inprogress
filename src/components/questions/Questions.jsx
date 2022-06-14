import axios from "axios";
import { useRef } from "react";

export default function Quiz(props) {

    
    const url = "https://beatsahoyp2.azurewebsites.net";

    const energyInput = useRef();
    const activityInput = useRef();
    const weatherInput = useRef();
    const vibeInput = useRef();
    
    // async-await
    async function createPlaylist() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const user = {
            energy: energyInput.current.value,
            activity: activityInput.current.value,
            weather: weatherInput.current.value,
            vibe: vibeInput.current.value,
            
        };
        console.log(user);
        try {
            const response = await axios.post(`${url}/playlists`, user);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }
        window.location.reload(false);
    }
  
    return (
     
        <div >
          <h1>Question</h1>
          
        
        <hr/>
  
        <div>
          <p>{props.question1}</p>
          <p>what is your current energy level?</p>
  
          <div >
            <input type="radio" name="energy" ref={energyInput} value= "1" />Low/Sleepy
            <input type="radio" name="energy" ref={energyInput} value= "3" />relaxed/chill
            <input type="radio" name="energy" ref={energyInput} value= "6" />pretty energetic
            <input type="radio" name="energy" ref={energyInput} value= "9" />PUMPED/super high energy

            <div>
          <p>{props.question2}</p>
          <p>What are you doing now</p>
  <div>
    <input type="radio" name="activity" ref={activityInput} value= "1"/>Winding down for the night
    <input type="radio" name="activity" ref={activityInput} value= "4" />Just waking up/ starting the day
    <input type="radio" name="activity" ref={activityInput} value= "8" />Getting some exercise
    <input type="radio" name="activity" ref={activityInput} value= "10" />Partying
    
    </div>
  </div>
  <div >
          <p>{props.question3}</p>
  <p>What's the weather like right now</p>
  <div >
    <input type="radio" name="weather" ref={weatherInput} value= "3"/>snowy
    <input type="radio" name="weather" ref={weatherInput} value= "2" />heavy rain
    <input type="radio" name="weather" ref={weatherInput} value= "1" />cloudy
    <input type="radio" name="weather" ref={weatherInput} value= "9" />nice and sunny
    
    </div>
  </div>
  <div >
          <p>{props.question4}</p>
  <p>What vibe are you going for?</p>
  <div >
    <input type="radio" name="vibe" ref={vibeInput} value= "1" />sad/gloomy
    <input type="radio" name="vibe" ref={vibeInput} value= "4" />romantic
    <input type="radio" name="vibe" ref={vibeInput} value= "8" />happy
    <input type="radio" name="vibe" ref={vibeInput} value= "9" />energized
    <input type="radio" name="vibe" ref={vibeInput} value= "6" />angry
    
    </div>
  </div>
        </div>
   
            

        
          </div>
          <button onClick={createPlaylist}>Submit</button>
          </div>
         
  
 
          
        
        
      
      
    );
  }
  