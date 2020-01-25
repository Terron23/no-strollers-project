import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser, fetchSingleStudio} from "../../../../actions";
import Title from "../../Title/Title";
import Input from "../../FormElements/Input/Input";
import TextArea from "../../FormElements/TextArea/TextArea";
import MultiSelect from "../../MultiSelect/MultiSelect";
import { Row, Col } from "react-bootstrap";
import history from "../../Helpers/History"


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
    this.props.fetchSingleStudio(this.props.studioid);
  }

  handleSubmit = event => {
    event.preventDefault();

    let capacity = event.target.capacity.value;
    let equipment = event.target.equipment.value;
    let services = event.target.services.value;
    let description = event.target.description.value;
    let include = event.target.include.value;
    let studioname = this.props.studioName;
    let studioid = this.props.studioid;
    let dates = event.target.days.value;
    let rules = event.target.rules.value;

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
        dates: obj,
        rules
      })
      .then(res => {
       history.push(`/view-studio/${studioid}`);
      })
      .catch(err => console.log(err));
  };

  handleOptions = () => {
    return [
      "Audio",
      "Engineering",
      "Production",
      "Coaching",
      "Free Wifi",
      "Drinks",
      "Food",
      "Television"
    ].map((op, i) => (
      <option selected="true" key={i}>
        {op}
      </option>
    ));
  };

  handleNull =(key, value) =>{
    return (value == null) ? "" : value
}

  render() {
    if (!this.props.auth || !this.props.studio || this.props.studio.length < 1) {
      return "Loading...";
    }
  
    let {classProp, children, showTitle, submitText="Submit", studio} = this.props;
    return (
      <Row>
        {children}
        <Col>
      <div className="container-fluid site-section">
        <div className="container">
          {showTitle ? <Title headerTitle="Add Studio Details" />:""}
          <div className="row">
       {studio.map(s=>
            <form
              id="detail_form"
              className="form-horizontal col-md-8"
              onSubmit={this.handleSubmit}
              ref="detail_form"
            >
        
              
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
                  value={ s.availibility ? Object.values(s.availibility).join(", "): ""}
                />

                <TextArea
                  name="description"
                  type="textarea"
                  label="Studio Description"
                  placeholder="Enter Studio's Description "
                 classProp={classProp}
                  required="true"
                  value={s.description}
                />

                <Input
                  name="capacity"
                  type="text"
                  label="Capacity"
                  placeholder="Enter Number of People Allowed. Enter 0 if Undecided."
                 classProp={classProp}
                  required="true"
                  value={s.guest_allowed}
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
                  value={s.equipment}
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
                  value={s.services}
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
                  value={s.includes}
                />

                  <TextArea
                  name="rules"
                  type="textarea"
                  label="Rules"
                  placeholder="Enter Rules for your Studio"
                 classProp={classProp}
                  required="true"
                  value={s.rules}
                /> 
                
                <hr />

                <div className="form-group">
                  <button className="btn roberto-btn w-100" type="submit">
                   {submitText}
                  </button>
                </div>
            
            </form>
)}
           
          </div>
        </div>
      </div>
      </Col>
      </Row>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchUser, fetchSingleStudio })(
  Details
);
