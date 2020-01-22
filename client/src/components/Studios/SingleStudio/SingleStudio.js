import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchSingleStudio,
  fetchUser,
} from "../../../actions";
import Wrapper from "./sub_components/Wrapper";
import Carousel from "./sub_components/Carousel";
import Features from "./sub_components/Features";
import Ameneties from "./sub_components/Ameneties";
import Reviews from "../../Reusable/Reviews/Reviews";
import Bonus from "./sub_components/Bonus";
import Description from "./sub_components/Description";
import Equipment from "./sub_components/Equipment";
import SingleStudioSideFilter from "./sub_components/SingleStudioSideFilter";
import MobileBook from "./sub_components/SingleStudioMobileFilter";
import SlideNav from "../../Reusable/SlideNav/SlideNav"
import Loading from "../../Reusable/Loading/Loading";
import "./css/single.css";

const Studios = ({
  studioName,
  price,
  guest,
  rules,
  id,
  param,
  equipment,
  description,
  services,
  includes,
  handleClose,
  handleShow,
  setShow,
  studioForm,
  studioType,
  rating, 
  venue,
  edit
}) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
         
          <h1 className="sh-text">{studioName}</h1>
        </div>
      </div>
      <div className="row">
       
        <div className="col-lg-8 col-md-12 col-sm-8">
        {edit()}
          <Features
            capacity={guest}
            price={price}
            studioType={studioType}
            rating={rating}
            venue={venue}
          />
            {edit()}
          <Description description={description} title={"Description"} />
          <Ameneties services={services} title={"Ameneties"} />
          <Bonus includes={includes} title={"Bonus"} />
          <Equipment equipment={equipment} title={"Equipment"} />
          <Description description={rules} title={"Rules"} />
          <Reviews param={param} />
        </div>
        <div className="col-12 col-lg-4 web-search">
          <SingleStudioSideFilter id={id} price={price} />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-8 mobile-search">
          <MobileBook
            price={price}
            studioName={studioName}
            setShow={setShow}
            handleClose={handleClose}
            handleShow={handleShow}
            studioForm={studioForm}
          >
            <div className="col-12 col-lg-4">
              <SingleStudioSideFilter id={id} handleClose={handleClose} />
            </div>
          </MobileBook>
        </div>
      </div>
    </Wrapper>
  );
};

class SingleStudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
      setEdits: false,
      highlight: "",
      showResponsivenavbar: false,
    };
  }
  componentDidMount() {
    this.props.fetchSingleStudio(this.props.match.params.id);
    this.props.fetchUser();
  }

  handleClose = e => {
    e.preventDefault();
    this.setState({ setShow: false });
  };
  handleShow = e => {
    e.preventDefault();
    this.setState({ setShow: true });
  };

  handleEdits =(editTarget)=>{
    let studio_id = this.props.studio.map(s=>s.user_fk).pop();
    let user_id =""
    if(this.props.auth) {
    user_id = this.props.auth._id

    if(user_id === studio_id && editTarget=== 'btn'){
      return <a  onClick={this.toggleNavigation} className='btn roberto-btn btn-2 sticky-btn'>Edit Your Listing</a>
    }
    else if(user_id === studio_id && editTarget !== 'btn'){
      return <a onClick={this.toggleNavigation}><i className="fa fa-edit"></i></a>
    }
  }
  }
  toggleNavigation =()=> {
    if (this.state.showResponsivenavbar) {
      this.setState({showResponsivenavbar:false});
    } else {
      this.setState({showResponsivenavbar:true});
    }
  }

  handleHighlight =(component)=>{
 this.setState({highlight:component});
  }

  render() {
    if (!this.props.studio) {
      return <Loading />;
    }

    const { studio, auth } = this.props;
    const { setShow , highlight, showResponsivenavbar} = this.state;
    return (
      <div>
      {this.handleEdits('btn')}
       
        {studio.map(studio => {
          if (this.props.match.params.id == studio._id) {
            return (
              <div className={`highlight-${highlight}`}>
            <Carousel key={studio._id} thumbnails={Object.values(studio.studio_images)} />
           
            </div>
            );
          }
        })}

        <div className="container">
          {studio.map(studio => {
            if (this.props.match.params.id == studio._id) {
              return (
                <Studios
                key={studio._id}
                param = {this.props.match.params.id }
                  studioName={studio.studio_name}
                  price={studio.studio_price}
                  rules={studio.rules}
                  guest={studio.guest_allowed}
                  id={studio._id}
                  studioType={studio.studio_type}
                  thumbnails={Object.values(studio.studio_images)}
                  equipment={studio.equipment}
                  description={studio.description}
                  services={studio.services}
                  includes={studio.includes}
                  auth={studio.contact_name}
                  setShow={setShow}
                  handleClose={this.handleClose}
                  handleShow={this.handleShow}
                  rating={studio.rating}
                  venue={studio.studio_venue}
                  edit={this.handleEdits}
                />
              );
            } else {
              return "";
            }
          })}
          <SlideNav toggleNavigation={this.toggleNavigation} showResponsivenavbar={showResponsivenavbar} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ studio, auth, }) {
  return { studio, auth, };
}

export default connect(mapStateToProps, {
  fetchSingleStudio,
  fetchUser,
})(SingleStudio);
