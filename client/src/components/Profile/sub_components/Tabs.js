import React, { Component } from "react";
import { ListGroup, Tab, Row, Col, Container, Nav } from "react-bootstrap";
import S3 from "../../Reusable/FileUploader/s3";



class Tabs extends Component {
  render() {
    let { showStudioForm, showUploads, showProfile, showBookings } = this.props;
    return (
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={2}>
            <div className="user-image">
              <S3 id={this.props.auth._id} image={this.props.auth.user_image} />
            </div>
            </Col>

            <Col sm={10}>
            <Nav className="tab-link">
              <Nav.Link action href="#link1">
                Your Studios
              </Nav.Link>
              <Nav.Link action href="#link2">
                Profile
              </Nav.Link>
              <Nav.Link action href="#link3">
                Studios You Visited
              </Nav.Link>
              {/* <ListGroup.Item action href="#link4">
                Uploads
              </ListGroup.Item> */}
            </Nav>
          <hr className="tab-border"/>
         
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Row>{showStudioForm}</Row>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">{showProfile}</Tab.Pane>
              <Tab.Pane eventKey="#link3">{showBookings}</Tab.Pane>
              {/* <Tab.Pane eventKey="#link4">{showUploads}</Tab.Pane> */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

export default Tabs;
