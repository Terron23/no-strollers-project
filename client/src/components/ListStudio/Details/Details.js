import React, { Component } from "react";
import Detail from "../../Reusable/Forms/Details/Details";
import "../AddStudioForm/css/style.css";
import { Col } from "react-bootstrap";
import FormNav from "../FormNavigation/SideNav";

class Details extends Component {
  render() {
    return (
      <Detail
        classProp="form-style-1"
        studioid={this.props.match.params.id}
        studioName={this.props.match.params.studioName}
      >
        <Col xs={3}>
          <FormNav active3="active" />
        </Col>
      </Detail>
    );
  }
}


export default Details
