import React, { Component } from "react";
import { Link } from "react-router-dom";
import HoverEffect from '../../../Reusable/HoverEffect/Hover'

const StudioSearchTemplate = ({
  studioName,
  _id,
  studioImage,
  price,
  studioType,
  city,
  availibility,
  dateQuery="",
  venue
}) => (
  <div className="single-room-area d-flex align-items-center mb-50">
    <div className="room-thumbnail">
      <HoverEffect link={`/single-studio/${_id}`}>
        <img src={studioImage} alt={studioName} className="search-img" />
      </HoverEffect>
    </div>

    <div className="room-content">
      <h2>{studioName}</h2>
      <h4>
        ${price}.00 <span>/ hr</span>
      </h4>
      <div className="studio-content">
        <h6>
          Studio Type: <span>{studioType}</span>
        </h6>
        <h6>
          Venue: <span>{venue}</span>
        </h6>
        <h6>
          Location: <span>{city}</span>
        </h6>
        <h6>
          <ul className="studio-search-list">
          Hours of Operation: {availibility.map((a, i)=>{
          return <li key={i}> {a} </li>
          })}
          </ul>
        </h6>
      </div>
      <Link to={`/single-studio/${_id}?date=${dateQuery}`} className="btn view-detail-btn">
        View Details{" "}
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </Link>
    </div>
  </div>
);

export default StudioSearchTemplate;
