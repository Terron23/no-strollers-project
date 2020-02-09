import React, { Component } from "react";
import ListStudioForm from "../../Reusable/Forms/ListStudio/ListStudio";
import FormNav from "../FormNavigation/SideNav";
import { Row, Col } from "react-bootstrap";
import "./css/style.css";

class ListStudio extends Component {

render() {
    return (
      <Row>
  
        <Col xs={3}>
          <FormNav active1="active" 
          disabled={this.props.match.params.id ? false : true}
          id={this.props.match.params.id || ""}
          studioName={this.props.match.params.studioName || ""}
          />
        </Col>
        <Col>
          <ListStudioForm
            title="Add Studio Contact & Prices"
            handleSubmit={this.handleSubmit}
            ad2Val="N/A"
            buttonText="Next"
            handleFiles={this.handleFiles}
            classProp="form-style-1"
            showTitle={false}
            studioid={this.props.match.params.id}
            studioName={this.props.match.params.studioName || ""}
          />
        </Col>
      </Row>
    );
  }
}

export default ListStudio;
