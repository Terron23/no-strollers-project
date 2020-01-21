import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dance from "./images/60.png";
import art from "./images/07.jpg";
import photo from "./images/63.jpg";
import film from "./images/06.jpg";
import music from "./images/08.jpg";
import yoga from "./images/03.jpg";
import Heading from "./sub_components/heading";
import { Link } from "react-router-dom";
import "./css/testimonial.css";

const ViewAll =()=>(  
 
    <div className="text-center col-md-12" style={{paddingTop: 30}}>
    <Link to={`/search-studio/`} className="btn roberto-btn btn-1">
    View All Studios <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </Link>
    </div>)

const StudioType = ({
  img,
  studioTitle,
  studioSubTitle,
  description,
  link
}) => {
  return (
    <div
      className={`single-project-slide active bg-img`}
    >
        <Link className="sh-link" to={link}>
      <img src={img} style={{ height: 800 }} />
      </Link>
      

      <div className="hover-effects">
        <div className="text text-center">
          <h6>{studioTitle}</h6>
          <h5>{studioSubTitle}</h5>
          <p>{description}</p>
        </div>

        <div className="slide-bg text-center">
        <Link className="sh-link" to={link}>
          Discover Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
          </div>
      </div>
      </div>

  );
};

export default () => {
 

  return (
    <section class="roberto-project-area">
        <Heading
          title="Indulge Your Passion"
          color="black"
          subtitle="Find the Studio For You"
        />
      <Carousel
     additionalTransfrom={0}
     arrows
     autoPlaySpeed={3000}
     centerMode={false}
     className=""
     containerClass="projects-slides"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     renderButtonGroupOutside={false}
     renderDotsOutside={false}
     responsive={{
       desktop: {
         breakpoint: {
           max: 3000,
           min: 1024
         },
         items: 3,
         partialVisibilityGutter: 40
       },
       mobile: {
         breakpoint: {
           max: 464,
           min: 0
         },
         items: 1,
         partialVisibilityGutter: 30
       },
       tablet: {
         breakpoint: {
           max: 1024,
           min: 464
         },
         items: 2,
         partialVisibilityGutter: 30
       }
     }}
     showDots={false}
     sliderClass=""
     slidesToSlide={1}
     swipeable
      >
        <StudioType img={yoga} studioTitle="Relax & Let Go" 
        studioSubTitle="Yoga Studios" description=""   
        link={"/search-studio/23"}/>
        <StudioType img={music} studioTitle="Make Music Not War" 
        studioSubTitle="Recording - Music" description=""  
        link={"/search-studio/22"}/>
        <StudioType img={photo} studioTitle="Conduct Professional Photo Shoots" 
        studioSubTitle="Photography Studios" description=""  
        link={"/search-studio/25"} />

        <StudioType img={art} studioTitle="Paint and Sip" 
        studioSubTitle="Art Studios" description=""  
        link={"/search-studio/28"}/>

        <StudioType img={dance} studioTitle="Express Yourself" 
        studioSubTitle="Dance Studios" description="" 
        link={"/search-studio/27"}/>

        <StudioType img={film} studioSubTitle="Film Studios" studioTitle="Make Your Directorial Debut" description="" 
        link={"/search-studio/24"}/>
      </Carousel>
      <ViewAll />
    </section>
  );
};
