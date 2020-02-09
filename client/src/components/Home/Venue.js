import React from "react";
import { Link } from "react-router-dom";
import homeBg from './images/color.jpg'
import "./css/venue.css";

const VenueType = ({ img, description, link = "/", bg }) => {
  return (
  
      <div className="col-md-4 venue-card single-service--area">
        <div className="service-content venue-service">

          <Link to={link}>
            <h5>
              <i className={`${img}`}></i> <br />{description}
            </h5>
          </Link>
         
        </div>
      </div>

  );
};

export default () => {
  return (
    <section className="container roberto-service-area" 
    style={{marginTop:"100px", marginBottom: "100px"}}>
        <div className="row text-center">
      <VenueType img="fa fa-home" description="Home Studios" bg="homeBg"/>
      <VenueType img="fa fa-building-o" description="Bussiness Studios" />
      <VenueType img="fa fa-desktop" description="Online Studios" />
      </div>
    </section>
  );
};
