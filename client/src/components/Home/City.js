import React, { Component } from "react";
import Heading from "./sub_components/heading";
import ViewAll from './sub_components/ViewAll';
import { Link } from "react-router-dom";
import './css/city.css';

const CityTemplate = ({ title, img, link }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="single-post-area city-img mb-50"
      >
        <Link to={`/search-studio/All/${link}`}>
          <img src={img} alt="" />
        </Link>

        <div className="post-meta">
          <Link to={`/search-studio/All/${link}`} className="post-date">
            {title}
          </Link>
        </div>

        <Link to={`/search-studio/All/${link}`} className="post-title">
          Featured Studios in {title}
        </Link>
        <Link to={`/search-studio/All/${link}`} className="btn continue-btn">
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default class City extends Component {
  render() {
    return (
      <section className="roberto-blog-area">
        <div className="container">
          <Heading
            title={"Stay Local"}
            subtitle="Find & Book Studios Near You"
          />

          <div className="row">
            <CityTemplate title="NYC" img={"https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_720,q_75,w_1400/v1/clients/newyorkcity/Skyline_Manhattan_Bridge_Brooklyn_Manhattan_NYC_Julienne_Schaer_022_007885f9-2552-464f-9c78-12b4082b71c2.jpg"} link={"New York"}/>

            <CityTemplate title="London" img={"http://yourdream.s3.amazonaws.com/media/cache/60/66/6066a0afd389471a1d1fe505e7a14031.jpg"} link="London"/>

            <CityTemplate title="Philadeliphia" img={"https://whyy.org/wp-content/uploads/2018/05/city-hall-profilex1200-768x432.jpg"} link="Pennsylvania"/>
            
          </div>
        
        </div>
        <ViewAll />
      </section>
    );
  }
}
