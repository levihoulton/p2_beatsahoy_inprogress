import React from "react"


export default function SimpleButton(){

    return(
<>
<button onclick="myMove()">Click Me</button> 
<StepButton><button onClick="signUp()">Start Listening</button></StepButton>
<button onclick="window.location.href='https://w3docs.com';">Click Here</button>
</>

    );
}
