import React, { Component } from "react";

import bg1 from "./images/01.jpg";
import bg3 from "./images/03.jpg";
import bg6 from "./images/06.jpg";
import navImg from "./images/sh_logo.png";
import "./css/hero.css";
import Herobg from "./sub_components/Herobg";
import {Carousel, CarouselItem} from 'react-bootstrap'
//Wrapper for Component


const Wrapper = ({ children }) => (
  <section className="welcome-area">
    <div className="welcome-slides">{children}</div>
  </section>
);

export default class Hero extends Component {
constructor(){
  super();
  this.state={
   index:"",
   direction:""
  }
}
 

handleSelect = (selectedIndex, e) => {
  this.setState({index:selectedIndex, direction:e.direction});
};

  render() {
    let {direction, index} = this.state;
    return (
      <Wrapper>
     <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} fade={true}
     pauseOnHover={false} interval={2000} controls={false} indicators={true}
     >
        <CarouselItem>
     <Herobg bg={bg1} logo={navImg} />
        </CarouselItem>
        <CarouselItem>
     <Herobg bg={bg3} logo={navImg} />
        </CarouselItem>
        <CarouselItem>
     <Herobg bg={bg6} logo={navImg} />
        </CarouselItem>

        </Carousel>
      </Wrapper>
    );
  }
}
