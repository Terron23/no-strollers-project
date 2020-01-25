import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchSingleStudio } from "../../../../actions";
import Title from "../../../assets/Title"
import DropDown from "../../FormElements/DropDown/DropDown";
import SearchCriteria from '../../../Reusable/SearchCriteria/SearchCriteria'
import Input from "../../FormElements/Input/Input";
import FormButton from "../../FormElements/Button/Button"
import Login from "../../../OAuth/LogIn/Login";
import Loading from "../../../Reusable/Loading/Loading"
import axios from 'axios';
import history from "../../Helpers/History"



class ListStudioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: null,
      region: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      venue: ["Home", "Business", "Online"],
    alertText: "",
    };
  }
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSingleStudio(this.props.studioid || null);
  }
 
  handleSubmit = event => {
    event.preventDefault();
alert("test")
    let name = event.target.name.value;
    let address1 = event.target.address1.value;
    let address2 = event.target.address2.value;
    let postalCode = event.target.postalCode.value;
    let city = event.target.city.value;
    let region = event.target.region.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let venue = event.target.venue.value;
    let studioName = event.target.studioName.value;
    let price = event.target.price.value;
    let rules = "";
    let guest = 0;
    let studioType = event.target.studioType.value;
    let studioImage = "";

    if(!this.props.studioid){
    axios
      .post("/api/v2/post-listing", {
        studioName,
        price,
        rules,
        name,
        email,
        address1,
        address2,
        postalCode,
        city,
        region,
        phone,
        venue,
        studioImage,
        guest,
        studioType
      })
      .then(res => {
        history.push(`/design/${studioName}/${res.data[0]._id}`);
      })
      .catch(err => alert(err));

    }
else{
      axios.put("/api/v2/put-studio-info", {
        name,
        email,
        phone,
        venue,
        address1,
        address2,
        postalCode,
        city,
        region,
        studioName,
        price,
        rules,
        guest,
        studioType,
        studioid: this.props.studioid
      }).then(res=>{
       alert("hello")
        history.push(`/design/${studioName}/${this.props.studioid}`);
      }).catch(err=>{
        this.setState({variant:"danger", alertClass:"col-md-4 offset-md-3", 
        alertText:'Something went wrong. Please try again.'})
      })
}
  };

  handleRegion = (value) => {
    return this.state.region.map((zip, i) => {
      if(value==zip){
        return <option key={i} selected>{zip}</option>
      }
      return <option key={i}>{zip}</option>;
    });
  };


  handleVenue = (value) => {
    return this.state.venue.map((v, i) => {
        if(value==v){
          return <option key={i} selected>{v}</option>
        }
      return <option key={i}>{v}</option>;
    });
  };

  handlePrePop =()=>{
    let {classProp} = this.props;
    if(!this.props.studioid){
      return false;
    }
    return this.props.studio.map((studio, i)=>{
      return( <Fragment><Input
        name="name"
        id="name"
        type="text"
        label="Contact Name"
        placeholder="Enter Full Name Here"
        classProp={classProp}
        value={studio.contact_name}
        required={true}
      />
      <Input
        name="studioName"
        label="Studio Name"
        type="text"
        placeholder="Enter the Name of Your Studio"
        classProp={classProp}
        value={studio.studio_name}
        id="studioName"
        required={true}
      />
      <Input
        name="price"
        id="price"
        label="Price Per Hour"
        type="number"
        placeholder="Enter your price"
        classProp={classProp}
        value={studio.studio_price}
        required={true}
      />
      <SearchCriteria
        name="studioType"
        title="Studio Type"
        placeholder="Enter Studio Type"
        col={classProp}
        search={studio.studio_type_fk}
        required={true}
      />

      <DropDown
        options={this.handleVenue(studio.studio_venue)}
        name="venue"
        type="text"
        label="Venue"
        placeholder="Enter Venue"
        classProp={classProp}
        value={studio.studio_venue}
        required={true}
      />

      <Input
        name="email"
        id="email"
        type="email"
        label="Bussiness Email"
        placeholder="Email"
        value={studio.contact_email}
        required={true}
        classProp={classProp}
      />

      <Input
        name="phone"
        type="phone"
        id="phone"
        label="Bussiness Phone Number"
        placeholder="Enter Phone Number"
        value={studio.contact_phone}
        required={true}
        classProp={classProp}
      />
      <Input
        name="address1"
        id="address1"
        type="text"
        label="Address1"
        placeholder="Enter Street Address"
        value={studio.address1}
        required={true}
        classProp={classProp}
      />
      <Input
        name="address2"
        id="address2"
        type="text"
        label="Address2"
        placeholder="Enter Street Address"
        value={studio.address2}
        classProp={classProp}
      />
      <Input
        name="city"
        id="city"
        type="text"
        label="City"
        placeholder="Enter Street City"
        classProp={classProp}
        value={studio.city}
        required={true}
      />
      <DropDown
        options={this.handleRegion(studio.state)}
        name="region"
        type="text"
        label="State"
        placeholder="Enter State"
        classProp={classProp}
        value={studio.state}
        required={true}
      />
      <Input
        name="postalCode"
        type="text"
        label="Zip Code"
        placeholder="Enter Zip Code"
        classProp={classProp}
        required={true}
        value={studio.postal_code}
      /></Fragment>)
    })

    
  }

  render() {

  if (this.props.auth == null) {
      
      return <Loading />
    }
    else if(!this.props.auth){
      return <Login />
    }


    

    let {title, handleSubmit, contactVal, studioNameVal, 
      priceVal, venueVal, emailVal, phoneVal , ad1Val, ad2Val, regionVal, cityVal, 
      postalVal, buttonText,  classProp, idVal, showTitle, search=""} = this.props
    return (
      <div className="container-fluid site-section">
        <div className="container">
         {showTitle ? <Title header={title} /> : ""}
            <div className="row">
       
        
          <form
            id="myForm"
            className="form-horizontal col-md-8 "
            onSubmit={this.handleSubmit}
          >
           {!this.handlePrePop() ?
             <Fragment>
                <Input
                name="name"
                id="name"
                type="text"
                label="Contact Name"
                placeholder="Enter Full Name Here"
                classProp={classProp}
                value={contactVal}
                required={true}
              />
              <Input
                name="studioName"
                label="Studio Name"
                type="text"
                placeholder="Enter the Name of Your Studio"
                classProp={classProp}
                value={studioNameVal}
                id="studioName"
                required={true}
              />
              <Input
                name="price"
                id="price"
                label="Price Per Hour"
                type="number"
                placeholder="Enter your price"
                classProp={classProp}
                value={priceVal}
                required={true}
              />
              <SearchCriteria
                name="studioType"
                title="Studio Type"
                placeholder="Enter Studio Type"
                col={classProp}
                search={search}
                required={true}
              />

              <DropDown
                options={this.handleVenue()}
                name="venue"
                type="text"
                label="Venue"
                placeholder="Enter Venue"
                classProp={classProp}
                value={venueVal}
                required={true}
              />

              <Input
                name="email"
                id="email"
                type="email"
                label="Bussiness Email"
                placeholder="Email"
                classProp={classProp}
                value={emailVal}
                required={true}
              />

              <Input
                name="phone"
                type="phone"
                id="phone"
                label="Bussiness Phone Number"
                placeholder="Enter Phone Number"
                classProp={classProp}
                value={phoneVal}
                required={true}
              />
              <Input
                name="address1"
                id="address1"
                type="text"
                label="Address1"
                placeholder="Enter Street Address"
                classProp={classProp}
                value={ad1Val}
                required={true}
              />
              <Input
                name="address2"
                id="address2"
                type="text"
                label="Address2"
                placeholder="Enter Street Address"
                classProp={classProp}
                value={ad2Val}
              />
              <Input
                name="city"
                id="city"
                type="text"
                label="City"
                placeholder="Enter Street City"
                classProp={classProp}
                value={cityVal}
                required={true}
              />
              <DropDown
                options={this.handleRegion()}
                name="region"
                type="text"
                label="State"
                placeholder="Enter State"
                classProp={classProp}
                value={regionVal}
                required={true}
              />
              <Input
                name="postalCode"
                type="text"
                label="Zip Code"
                placeholder="Enter Zip Code"
                classProp={classProp}
                required={true}
                value={postalVal}
              /> 
              </Fragment> : this.handlePrePop()
           }
              <hr />
              <FormButton divClass="form-group" buttonClass="btn roberto-btn w-100" 
              type="submit" text={buttonText}/>

          </form>

       
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({auth, studio}) {
  return {auth , studio};
}

export default connect(mapStateToProps, {fetchUser, fetchSingleStudio})(ListStudioForm);
