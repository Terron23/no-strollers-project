import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Details from '../../Reusable/Forms/Details/Details'
import ListStudio from '../../Reusable/Forms/ListStudio/ListStudio'
import {Card, Accordion, Button} from 'react-bootstrap'

import "./css/slide-nav.css"



const SlideNav =({toggleNavigation,  showResponsivenavbar, revealSearch })=>{
    return(
        
  <div className={`container ${showResponsivenavbar? "open fixed-top": ""}`}>
   <div id="basic-navbar-nav" className="studio-hunt-navbar-nav">
   <button type="button"
   onClick={toggleNavigation} 
   className="pull-right navbar-toggler"
  ><i className={'fa fa-times'}></i></button>
<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       Edit Details
      </Accordion.Toggle>
    </Card.Header>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
       Edit Contact
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body><Details classProp="test"/></Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse eventKey="1">
      <Card.Body><ListStudio classProp="test"/></Card.Body>
    </Accordion.Collapse>
  </Card>
    </Accordion>
   
    
       
    </div>   
</div>
)
}

export default SlideNav;