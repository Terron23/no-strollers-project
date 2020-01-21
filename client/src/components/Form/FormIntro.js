import React, { Component } from "react";
import Input from "../assets/Input";
import DropDown from "../assets/DropDown";
import TimeDropDown from "../assets/TimeDropDown";
import axios from "axios";

class FormIntro extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      ]
    };
  }

  handleRegion = () => {
    return this.state.region.map((zip, i) => {
      return <option key={i}>{zip}</option>;
    });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Input
          name="fullName"
          type="text"
          label="Contact Name"
          placeholder="Enter Full Name Here"
        />
        <Input
          name="studioName"
          type="text"
          label="Business Name"
          placeholder="Enter Studio Name"
        />
        <Input
          name="email"
          type="email"
          label="Bussiness Email"
          placeholder="Email"
        />
        <Input
          name="phone"
          type="phone"
          label="Bussiness Phone Number"
          placeholder="Enter Phone Number"
        />
        <Input
          name="address"
          type="text"
          label="Bussiness Address"
          placeholder="Enter Street Address"
        />
        <Input
          name="city"
          type="text"
          label="Bussiness City"
          placeholder="Enter Street City"
        />
        <DropDown
          options={this.handleRegion}
          name="region"
          type="text"
          label="State"
          placeholder="Enter State"
        />
        <Input
          name="postalCode"
          type="text"
          label="Zip Code"
          placeholder="Enter Zip Code"
        />

        <button className="btn btn-secondary" type="submit">
          Continue
        </button>
      </form>
    );
  }
}

export default FormIntro;
