import React, {Component} from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";

class Questionnaire extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }
  onCompleteComponent = () =>{
    this.setState({
      isCompleted: true
    })
  }
render() {
  var json = {
    elements: [
      {
        type: "dropdown",
        name: "energy",
        title: "what is you current energy level?",
        isRequired: true,
        choices: [
          "Low/Sleepy",
          "relaxed/chill",
          "pretty energetic",
          "PUMPED/super high energy"


        ]
        
      },
      
      {
        type: "panel",
        name: "panel",
       
        elements: [
          {
            type: "dropdown",
            name: "activoty",
            title: "What are you doing now?",
            isRequired: true,
            choices: [
              "Winding down for the night",
              "Just waking up/ starting the day",
              "Getting some exercise",
              "Partying"
              
            ]
          },
          
           {
            type: "dropdown",
            name: "weather",
            title: "What's the weather like right now?",
            isRequired: true,
            choices: [
                "snowy",
                " heavy rain",
                "cloudy",
                "nice and sunny"


            ]
        
              
            },
            {
                type: "dropdown",
                name: "vibe",
                title: "What vibe are you going for?",
                isRequired: true,
                choices: [
                    "sad/gloomy",
                    "in love",
                    "happy",
                    "energized",
                    "angry"
                ]
            }
          
        ]
      }
    ]
  };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
      json={json}
      showCompletedPage={false}
      onComplete={this.onCompleteComponent}
    />
    ) : null

    var onSurveyCompletion = this.state.isCompleted ? (
        <button  >Click to view your personalized playlist!</button>
    ) : null;
  return (
   

  <>
        <h1>Welcome to BeatsAhoy</h1>


<h2>Complete the short questionnaire below to maximize your playlist experience</h2>

<div className="Questionnaire">
      
      {surveyRender}
      {onSurveyCompletion}
     </div>
        
        </>)
}
}

export default  Questionnaire;
//create questionnaire where you input 1-10 then connect those inputs times ten to the spotify api to set the parameters for the types of song added to the playlist
