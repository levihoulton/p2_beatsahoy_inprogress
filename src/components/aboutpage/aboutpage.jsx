import React from "react";
import { useNavigate } from "react-router-dom";

export default function Aboutpage(){

    const navigate = useNavigate ();

    return(
        <>
            <h1>About BeatsAhoy</h1>

            <p>Beats Ahoy is an application that allows you to discover new music in a unique way. Our application will include several aspects that lets you personalize, create, and change the music recommendations that you receive. Our application leverages Spotify's API to help curate a unique playlist with the help of a short questionnaire based off your mood and vibe.</p>

     
     <button onClick={() => navigate("/register")}> Sign up </button>

       <br></br>
       <br></br>

       <button onClick={() => navigate("/login")}> Log in </button>
       
       <br></br>

       <br></br>

       <button onClick={() => navigate("/")}> Home </button>
       

        </>
    );
}