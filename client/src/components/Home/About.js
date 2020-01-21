import React, { Component } from "react";
import logo from './images/sh_logo.png';


const ImageGallery = () => {
  return (
    <div className="col-12 col-lg-6">
      <div
        className="about-us-thumbnail mb-100"
      >
        <div className="row no-gutters">
          <div className="col-12">
            <div className="single-thumb">
              <img
                src={`${logo}`}
                alt="studio-hunt-logo"
                style={{ width:"100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class About extends Component {
  render() {
    return (
      <div className="container mt-100">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="section-heading wow fadeInUp" data-wow-delay="100ms">
              <h6>Find, Book , Go</h6>
              <h2>
                How <br />
                It Works
              </h2>
            </div>
            <div className="about-us-content mb-100">
              <h5 className="wow fadeInUp" data-wow-delay="300ms">
               <ul>
                 <li><span className="phone-text">Find</span> studios of all types. Music, Art, Dance... whatever your creative heart desires. Then...</li>
                 <li><span className="phone-text">Book </span>the date and times you will like to attend and</li>
                 <li><span className="phone-text">Go</span>... Thats It!</li>
               </ul>
              </h5>
             
            </div>
          </div>
          <ImageGallery />
        </div>
      </div>
    );
  }
}


