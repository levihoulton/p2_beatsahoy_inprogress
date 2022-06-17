import React from "react";

import  "./header.css";
import Logo from '../images/logo.svg';


export default function Header() {
  return (
      <>  
      <div ClassName="Header">
        <div class="container">
         <img src={Logo} alt="Logo"   />
          <h3 >"Music is life's art."</h3>
        </div>
      </div>
      </>
)
}