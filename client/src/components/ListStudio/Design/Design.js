import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchSingleStudio } from "../.././../actions";
import Title from "./../../assets/Title";
import StudioDropZone from "./sub_components/Dropzone"
import FormNav from "../FormNavigation/SideNav";
import { Row, Col } from "react-bootstrap";
import './css/style.css'

const Wrapper = ({ children, }) => (
  <div className="container-fluid site-section">
    <div className="container">
      <Title header="Upload More Content" subtitle={'Add Images, Art Work, Photographs, Music, and Videos'}/>
    
        <fieldset style={{"padding":"25px"}}>{children}</fieldset>
   
    </div>
  </div>
);



class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studioname: this.props.match.params.studioName,
      studioid: this.props.match.params.id
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSingleStudio(this.props.match.params.id || null)
  }



render() {
    if (!this.props.auth) {
      return "";
    }
    const {studioname, studioid } = this.state;
    return (
      <Row>
        <Col xs={3}><FormNav active2="active" 
        link2={`/design/"ghgfgghjjjhgg"/${studioid}`} 
        disabled={this.props.studio ? false: true}
        id={studioid || ""}/>
        </Col>
        <Col>
      <Wrapper>
<StudioDropZone 
studioid={studioid} 
studioname={studioname}
history = {this.props.history}
/> 
 </Wrapper>
 </Col>
 </Row>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(
  mapStateToProps,
  { fetchUser , fetchSingleStudio}
)(Design);
