import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocation, fetchStudio, fetchFeatureStudios } from "../.././actions";
import About from "./About";
import FeaturedStudios from "./FeaturedStudios"
import PostStudio from "./PostStudio";
import StudioTypes from "./StudioTypes"
import StudioCards from "./StudioCards"
import Hero from "./Hero/Hero";
import City from "./City"
import Schedule from "./Schedule";
import Venue from "./Venue"
import Loading from "../Reusable/Loading/Loading"

class Home extends Component {

  componentDidMount() {
    this.props.fetchLocation();
    this.props.fetchStudio();
    this.props.fetchFeatureStudios()
  }

  handleSubmit = e => {
    e.preventDefault();
    let search = e.target.search.value === "" ? "All" : e.target.search.value;
    let location =
      e.target.location.value === "" ? "All" : e.target.location.value;
    this.props.history.push("/search-studio/" + search + "/" + location);
  };

  render() {
    if (!this.props.locate || !this.props.studio) {
      return <Loading />;
    }

    let { locate, history, featStudios } = this.props;
    return (
      <div>
        <Hero />
        <Schedule
          locate={locate.region}
          history={history}
          handleSubmit={this.handleSubmit}/>
         <FeaturedStudios featStudios={featStudios}/> 
         <StudioCards />
         <City />
         <Venue />
         <StudioTypes />
        {/* <StudioType /> */}
        <About />
        <PostStudio />
      </div>
    );
  }
}

function mapStateToProps({ locate, studio , featStudios}) {
  return { locate, studio, featStudios };
}

export default connect(mapStateToProps, { fetchLocation, fetchStudio, fetchFeatureStudios })(Home);
