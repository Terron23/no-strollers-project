import React, { Component } from "react";
import { Link } from "react-router-dom";
import './css/hover.css'



const HoverEffect =({link,  children})=>{
return(
    <Link to={link} className="info align-self-center">   <div className="hovereffect">
    {children}
        <div className="overlay">
       
      
        </div>
    </div> </Link>
)
}

export default HoverEffect;