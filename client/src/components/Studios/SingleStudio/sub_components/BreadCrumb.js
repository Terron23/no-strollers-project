import React from "react";
import {Carousel, CarouselItem} from 'react-bootstrap'
import artImg from '../img/art.jpg'
import photoImg from '../img/06.jpg'
import recStudioImg from '../img/08.jpg'
import yogaImg from '../img/03.jpg'
import podImg from '../img/studio.jpg'
import danceImg from '../img/04.jpg'

const BreadCrumb = ({ studioName, price, studiotype, thumbnails }) => {
  return (
    <div
      className="breadcrumb-area bg-img bg-overlay jarallax"
       style={{
        backgroundImage: "url(" + thumbnails[0]  + ")" 
      }}
      >

      <div className="container h-100">
        <div className="row h-100 align-items-end">
          <div className="col-12">
            <div className="breadcrumb-content d-flex align-items-center justify-content-between pb-5">
              <h2 className="room-title">
              {studioName} 
              <br />
              <small>{studiotype}</small></h2>
              <h2 className="room-price">
                ${price} <span>/ Per hour</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles={
  artStyle:{
    backgroundImage: "url(" + artImg  + ")" 
  },
  photoStyle:{
    backgroundImage: "url(" + photoImg  + ")" 
  },
  studioStyle:{
    backgroundImage: "url(" + recStudioImg  + ")" 
  },
  yogaStyle:{
    backgroundImage: "url(" + yogaImg  + ")" 
  },
  podStyle:{
    backgroundImage: "url(" + podImg  + ")" 
  },
  danceStyle:{
    backgroundImage: "url(" + danceImg  + ")" 
  },
}

export default BreadCrumb;
