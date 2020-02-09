import React, { Component } from "react";
import Heading from "./sub_components/heading";
import { Link } from "react-router-dom";
import HoverEffect from '../Reusable/HoverEffect/Hover';
import {handleRating} from '../Reusable/Helpers/Helper';
import ViewAll from './sub_components/ViewAll'
import './css/feature.css';


const SingleFeaturedStudio = ({
  bg,
  studiotype,
  price,
  studioName,
  venue,
  id,
  rating
}) => {
  return (
   <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 feature-gallery">
     <div className="row text-muted">
      <Link to={`/single-studio/${id}`}>
    
       
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <HoverEffect link={`/single-studio/${id}`} linkTitle={"View Details"}>
    <img src={`${bg}`} className="gallery-img"/>
        </HoverEffect>
</div>
</Link>

       
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12"> 
      <h3 className="feature-name">{studioName}</h3></div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 feature-price">{price}.00/hr</div>
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12"> {studiotype}</div>
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">{handleRating(rating)}</div>
      </div> 
    
      </div>
        
     
  );
};

class FeaturedStudios extends Component {
  showStudio = () => {
    console.log("test", this.props)
    return this.props.featStudios
      .map(s => {
        return (
          <SingleFeaturedStudio
            key={s._id}
            bg={Object.values(s.studio_images)[0]}
            studiotype={s.studio_type}
            price={s.studio_price}
            studioName={s.studio_name}
            rating={s.rating}
            group={s.guest}
            id={s._id}
            amenities={s.services}
            equipment={s.equipment}
          />
        );
      });
  };

  render() {

    return (
      <section className="feature-section">
        <Heading
          title="Featured Studios"
          color="black"
          subtitle="View Our Top Rated Studios"
        />
     <div className="container">
     <div className="row ">
          
            {this.showStudio()}
            <ViewAll />
         </div>
         </div>
      </section>
    );
  }
}



export default FeaturedStudios;
