import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Register(){
    const navigate = useNavigate();

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    


   

    const url = "azureurl"

    async function userReg(){
        

        const user = {
            
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            password: passwordInput.current.value,
           
        }
       

        
        try{
        const response = await axios.post(`${url}/register` , user)
        navigate("/");
       
        console.log(response.data);
        //console.log(response)
        } catch(error){
            console.error(error.response.data);
                alert(error.response.data);
        }
        
    }

    return(
        <>
        
        <center>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter First Name" ref={fnameInput}></input>
        <br></br>
        <input placeholder="Enter Last Name" ref={lnameInput}></input>
        <br></br>
        <input placeholder="Enter Username" ref={usernameInput}></input>
        <br></br>
        <input type="password" placeholder="Enter password" ref={passwordInput}></input>
        
        <br></br>
        <br></br>
        <button onClick={userReg}>Register</button>

</center>
        </>
    )

}