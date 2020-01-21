import React, { Component } from "react";
import { Link } from "react-router-dom";

const SingleFeaturedStudio = ({
  bg,
  studiotype,
  price,
  group,
  amenities,
  studioName,
  venue,
  rating,
  id
}) => {
  return (
    <div className="item">
      <div className="single-room-slide d-flex align-items-center ">
        <div
          className="room-thumbnail h-100 bg-img"
          style={{ backgroundImage: `url(${bg}` }}
        ></div>
        <div className="room-content">
          <h2 data-animation="fadeInUp" data-delay="100ms">
            {studioName}
          </h2>
          <small>{studiotype}</small>
          <h3 data-animation="fadeInUp" data-delay="300ms">
            ${price}
            <span>/ hr</span>
          </h3>
          <ul
            className="room-feature"
            data-animation="fadeInUp"
            data-delay="500ms"
          >
            <li>
              <span>
                <i className="fa fa-check"></i> Capacity
              </span>{" "}
              <span>: Max person {group}</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i> Amenities
              </span>{" "}
              <span>: {amenities}</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i> Venue
              </span>{" "}
              <span>: {venue}</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i> Rating
              </span>{" "}
              <span>: {rating}</span>
            </li>
          </ul>
          <Link
            to={`/single-studio/${id}`}
            className="btn roberto-btn mt-30"
            data-animation="fadeInUp"
            data-delay="700ms"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeaturedStudio;
