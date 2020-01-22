import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar , Form, Button, FormControl} from "react-bootstrap";
import NavMobile from "./sub_components/NavMobile"
import './css/nav.css'
import logo from './images/logo/sh_logo.png';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newclassNameName: "",
      isActive: "",
      width: "",
      height: "",
      fade: false,
      showResponsivenavbar: false,
    };
  }


  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <Nav.Link key="post-studio" href="/post-studio">
            <i className="fa fa-plus"></i>Add Your Studio
          </Nav.Link>,
          <Nav.Link key="sign-up" href="/log-in">Sign Up/Login</Nav.Link>
        ].map((value, i) => {
          return value;
        });
      default:
        return [
          <Nav.Link key="post-studio" href="/post-studio">
            <i className="fa fa-plus"></i> Add Your Studio
          </Nav.Link>,

        <Nav.Link key="userprofile" href="/userprofile">
        <i className="fa fa-user"></i>
         {this.props.auth.username?this.props.auth.username: this.props.auth.contact_name+"'s Account"}
          </Nav.Link>,

          <Nav.Link key="logout" href="/api/logout">Logout</Nav.Link>
        ].map((value, i) => {
          return value;
        });
    }
  }



toggleNavigation =()=> {
  if (this.state.showResponsivenavbar) {
    this.setState({showResponsivenavbar:false});
  } else {
    this.setState({showResponsivenavbar:true});
  }
}

  render() {
    let { revealSearch, auth } = this.props;
    let { fade, showResponsivenavbar } = this.state;
    return (
      <div className={`main-header-area`}>
        <div className="container">
          <Navbar
            expand="lg"
            className="studio-nav"
          >
            <Navbar.Brand className="mr-auto">
              <a href="/"><img src={logo} width="80px" /></a>Beta
            </Navbar.Brand>
        
            <Navbar.Collapse id="basic-navbar-nav" className="web-nav">
              <Nav className="ml-auto">{this.renderContent()}</Nav>
              {/* <Nav.Link>
                <i className="fa fa-search" onClick={revealSearch}></i>
              </Nav.Link> */}
              <Nav.Link className="navFade"  href="/search-studio">
               
                  Book Now{" "}
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Nav.Link >
              
            </Navbar.Collapse>

            <NavMobile renderContent={this.renderContent()} toggleNavigation={this.toggleNavigation}
        showResponsivenavbar={showResponsivenavbar} revealSearch={revealSearch}
        auth={auth}
        />
          </Navbar>
        </div>
       
      </div>
    );
  }
}



function mapStateToProps({ auth }) {
  //State from reducers/index.js file  gets passed to header component as props
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
