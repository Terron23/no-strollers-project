import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../../../actions";
import Title from "../../../assets/Title"
import DropDown from "../../FormElements/DropDown/DropDown";
import SearchCriteria from '../../../Reusable/SearchCriteria/SearchCriteria'
import Input from "../../FormElements/Input/Input";
import FormButton from "../../FormElements/Button/Button"
import Login from "../../../OAuth/LogIn/Login";
import Loading from "../../../Reusable/Loading/Loading"



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
    
    };
  }

 

  handleRegion = () => {
    let {regionVal}=this.props;
    return this.state.region.map((zip, i) => {
      if(regionVal==zip){
        return <option key={i} selected>{zip}</option>
      }
      return <option key={i}>{zip}</option>;
    });
  };


  handleVenue = () => {
    let {venueVal}=this.props;
    return this.state.venue.map((v, i) => {
        if(venueVal==v){
          return <option key={i} selected>{v}</option>
        }
      return <option key={i}>{v}</option>;
    });
  };

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
         {showTitle? <Title header={title} /> : ""}
            <div className="row">
          <div
            className="col-md-2"
          ></div>
        
          <form
            id="myForm"
            className="form-horizontal col-md-8 "
            onSubmit={handleSubmit}
          >
            <fieldset>
            <input type="password" value={idVal} className="d-none" name="studioid"/>
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
                options={this.handleVenue}
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
                options={this.handleRegion}
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

              <hr />
              <FormButton divClass="form-group" buttonClass="btn roberto-btn w-100" 
              type="submit" text={buttonText}/>

            </fieldset>
          </form>

          <div
            className="col-md-2"
          
          >
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth };
}

export default connect(mapStateToProps, {fetchUser})(ListStudioForm);
