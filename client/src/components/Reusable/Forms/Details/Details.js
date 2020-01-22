import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser, fetchStudioType } from "../../../../actions";
// import Title from "./Reusable/Title/Title";
import Input from "../../FormElements/Input/Input"
import TextArea from "../../FormElements/TextArea/TextArea";
import MultiSelect from "../../MultiSelect/MultiSelect";


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: [],
      formControl: null,
      studioName: ""
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  handleSubmit = event => {
    event.preventDefault();

    let capacity = event.target.capacity.value;
    let equipment = event.target.equipment.value;
    let services = event.target.services.value;
    let description = event.target.description.value;
    let include = event.target.include.value;
    let studioname = this.props.match.params.studioName;
    let studioid = this.props.match.params.id;
    let dates = event.target.days.value;

    let obj = {};
    dates.split(",").map((d, i) => {
      obj[i] = d.replace(/ /g, "");
    });

    axios
      .put("/api/v2/post-details", {
        capacity,
        equipment,
        services,
        description,
        studioname,
        include,
        studioid,
        dates: obj
      })
      .then(res => {
        alert("Successfully Updated")
      })
      .catch(err => console.log(err));
  };



  render() {
    if (!this.props.auth || !this.props.studiotype) {
      return "Loading...";
    }
    return (
      <div className="container-fluid site-section">
        <div className="container">
          {/* <Title headerTitle="Add Studio Details" /> */}
          <div className="row">
            <form
              id="myForm"
              className="form-horizontal col-md-12 "
              onSubmit={this.handleSubmit}
            >
              <fieldset>
                <MultiSelect
                  options={[
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ]}
                  label={"Availibility"}
                  id={"days"}
                  placeholder="Add Days Studio is Open"
                  custom={false}
                  other_id="na"
                  text_id="na_select"
                  required="true"
                />

                <TextArea
                  name="description"
                  type="textarea"
                  label="Studio Description"
                  placeholder="Enter Studio's Description "
                  classProp="form-style-1"
                  required="true"
                />

                <Input
                  name="capacity"
                  type="text"
                  label="Capacity"
                  placeholder="Enter Number of People Allowed. Enter 0 if Undecided."
                  classProp="form-style-1"
                  required="true"
                />
               

                <MultiSelect
                  options={[
                    "Towels",
                    "Laptop",
                    "Yoga Mats",
                    "Mixers",
                    
                  ]}
                  label={"Add Equipment"}
                  id={"equipment"}
                  placeholder="Please list Any Notable Equipment You May Use."
                  custom={true}
                  other_id="equipment_other"
                  text_id="equipment_select"
                  required="true"
                />

                <MultiSelect
                  options={[
                    "Parking",
                    "Lounge",
                    "Wi-Fi",
                    "Bathroom",
                    "Food & Beverages",
                    "Air & Heating"
                  ]}
                  label={"Amenities"}
                  id={"services"}
                  placeholder="Parking, Drinks, Wifi"
                  custom={true}
                  other_id="amen"
                  text_id="amen_select"
                  required="true"
                />

                <MultiSelect
                  options={[
                    "Audio Engineer",
                    "Instructor",
                    "Assistant",
                    "Host"
                  ]}
                  label={"Include In Booking"}
                  id={"include"}
                  placeholder="Add Any Special Features or Resources Included with your Venue"
                  custom={true}
                  other_id="incl"
                  text_id="incl_select"
                  required="true"
                />

                <hr />

                <div className="form-group">
                  <button className="btn roberto-btn w-100" type="submit">
                    Save & Continue
                  </button>
                </div>
              </fieldset>
            </form>

          
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ studiotype, auth }) {
  return { studiotype, auth };
}

export default connect(mapStateToProps, { fetchUser, fetchStudioType })(
  Details
);
