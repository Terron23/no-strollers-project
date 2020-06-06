import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo/sh_logo.png"



const NavMobile =({toggleNavigation, renderContent, showResponsivenavbar, revealSearch })=>{
    return(
    <div className="mobile-nav">
         <button type="button"
    onClick={toggleNavigation} 
    className="pull-right navbar-toggler"
   ><i className={ !showResponsivenavbar? `navbar-toggler-icon`: 'fa fa-times'}></i></button>
   

    <div className={`container ${showResponsivenavbar? "open fixed-top": ""}`}>
    <ul id="basic-navbar-nav" className="studio-hunt-navbar-nav">
    <button type="button"
    onClick={toggleNavigation} 
    className="pull-right navbar-toggler"
   ><i className={'fa fa-times'}></i></button>

      <li>
          <Link to="/">
       <img src={logo} width="40%"/>
      </Link>
      </li>
        
    
          {renderContent}

    
        </ul>
        </div>
        
</div>
)
}

export default NavMobile;