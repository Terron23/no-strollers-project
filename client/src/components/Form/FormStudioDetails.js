import React, { Component } from "react";
import Input from "../assets/Input";
import DropDown from "../assets/DropDown";
import TimeDropDown from "../assets/TimeDropDown";
import axios from "axios";

class FormStudioDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venue: ["Home", "Business", "Online"],
      studiotype: [
        "Recording - Music",
        "Recording - Podcast/Radio",
        "Art",
        "Film",
        "Yoga",
        "Spa",
        "Photography"
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      value: this.props.studioid
    };
  }

  handleStudioTypes = () => {
    return this.state.studiotype.map(types => {
      return <option>{types}</option>;
    });
  };

  handleVenue = () => {
    return this.state.venue.map((types, i) => {
      return <option key={i}>{types}</option>;
    });
  };

  handleSubmit = (event, formType) => {
    event.preventDefault();
    let name = "";
    let address1 = "";
    let address2 = "";
    let postalCode = "";
    let city = "";
    let region = "";
    let email = "";
    let phone = "";
    let venue = event.target.venue.value;
    let studioName = event.target.studioName.value;
    let price = event.target.price.value;
    let rules = "";
    let guest = "";
    let studioType = event.target.studioType.value;
    let hoursOfOperation = "";
    let files = "";
    let studioImage;
  };

  render() {
    console.log("details", this.props);
    console.log("State", this.state.value);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Input name="studioid" type="text" label="" value={this.state.value} />
        <Input
          name="studioName"
          type="text"
          label=""
          placeholder="Enter Studio Name"
        />
        <DropDown
          options={this.handleStudioTypes}
          name="studioType"
          type="text"
          label="Studio Type"
          placeholder="Enter Studio Type"
        />
        <DropDown
          options={this.handleVenue}
          name="venue"
          type="text"
          label="Venue"
          placeholder="Enter Venue"
        />

        <Input
          name="price"
          type="number"
          label="Price"
          placeholder="Enter Price"
        />

        <Input
          name="file"
          type="file"
          label="Business Images"
          placeholder="Upload Photos"
        />

        <button className="btn btn-secondary" type="submit">
          Continue
        </button>
      </form>
    );
  }
}

export default FormStudioDetails;
