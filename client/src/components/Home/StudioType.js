import React, { Component } from "react";
import Heading from "./sub_components/heading";
import dance from "./images/60.png";
import art from "./images/07.jpg";
import photo from "./images/63.jpg";
import film from "./images/06.jpg";
import music from "./images/08.jpg";
import yoga from "./images/03.jpg";
import HoverEffect from '../Reusable/HoverEffect/Hover'
import { Link } from "react-router-dom";
import './css/studiotype.css';


const ViewAll =()=>(  
<div className="row">
<div className="text-center col-md-12 sh-view-all">
<Link to={`/search-studio/`} className="btn  text-center ">
<p >View All <i className="fa fa-long-arrow-right" aria-hidden="true"></i></p> 
</Link>
</div>
</div>)

const Studios =({studioTypeName, img, link})=>(<div className="col-md-4 col-lg-4 col-sm-12 type-img " >
<HoverEffect link={link}>
  <img src={img} className="studiohunt-type-img"/>
  <div className="carousel-caption studio-hunt-hover-effects">
<h3>{studioTypeName}</h3>
    </div>
    </HoverEffect>
</div> )



export default class StudioType extends Component {
  render() {
    return (
      <section
        
        style={{ backgroundColor: "#0e2737" }}
      >
        <hr />
        <Heading
          title="Indulge Your Passion"
          color="white"
          subtitle="Find the Studio For You"
        />

<div className="projects-slides ">
     <div
        className={`sh-studio-type-slide active  bg-img`}
      >
    <div className="studio-type-row row">
    <Studios studioTypeName="Yoga" img={yoga} link="/search-studio/17"/> 
    <Studios studioTypeName="Recording - Music" img={music} link="/search-studio/15"/> 
    <Studios studioTypeName="Dance" img={dance} link="/search-studio/18"/> 
    <Studios studioTypeName="Film" img={film} link="/search-studio/20"/> 
    <Studios studioTypeName="Photography" img={photo} link="/search-studio/19"/> 
    <Studios studioTypeName="Art" img={art} link="/search-studio/21"/>
        </div>
      <ViewAll />
        </div>
    
        </div>

   
      </section>
    );
  }
}
