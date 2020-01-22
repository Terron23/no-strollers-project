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
          <Nav.Link href="/">
       <img src={logo} width="40%"/>
      </Nav.Link>
      </li>
        
      <Nav className="ml-auto">
          {renderContent}
      
      </Nav>
      
      <li>
          {/* <Nav.Link>
        <i className="fa fa-search" onClick={revealSearch}></i>
      </Nav.Link> */}
      </li>

      <li>
          <Nav.Link className="navFade"  href="/search-studio">
          Book Now{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Nav.Link >
        </li>
        </ul>
        </div>
        
</div>
)
}

export default NavMobile;