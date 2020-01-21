import React from "react";
import {Row, Col} from 'react-bootstrap'

const Features = ({capacity, studioType, price, rating, venue}) => {
  return (
    <div>
      <div className="room-features-area d-flex flex-wrap mb-50 row">
      <h6>
          Venue: <span> {venue}</span>
        </h6>
      <h6>
          Studio Type: <span>{studioType}</span>
        </h6>
        
        <h6>
          Price Per Hour: <span>${price}.00</span>
        </h6>
        <h6>
          Rating: <span>{rating < 1? "Not Rated Yet" : `${Number.parseFloat(rating).toFixed(2)}/5`}</span>
        </h6>
      </div>

     

    </div>
  );
};

export default Features;
