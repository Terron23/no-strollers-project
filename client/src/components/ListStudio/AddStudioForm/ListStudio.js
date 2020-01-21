import React, { Component } from "react";
import axios from "axios";
import ListStudioForm from "../../Reusable/Forms/ListStudio/ListStudio";
import FormNav from "../FormNavigation/SideNav";
import { Row, Col } from "react-bootstrap";
import "./css/style.css";

class ListStudio extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    event.preventDefault();

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
        this.props.history.push(`/design/${studioName}/${res.data[0]._id}`);
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <Row>
        <Col xs={3}>
          <FormNav active1="active"/>
        </Col>
        <Col>
          <ListStudioForm
            title="Add Studio Form"
            handleSubmit={this.handleSubmit}
            ad2Val="N/A"
            buttonText="Next"
            handleFiles={this.handleFiles}
            classProp="form-style-1"
            showTitle={true}
          />
        </Col>
      </Row>
    );
  }
}

export default ListStudio;
