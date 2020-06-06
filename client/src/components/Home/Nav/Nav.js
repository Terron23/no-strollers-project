import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar , Form, Button, FormControl} from "react-bootstrap";
import NavMobile from "./sub_components/NavMobile"
import './css/nav.css'
import logo from './images/logo/sh_logo.png';


const NavLink =({children, key, href, extraClass})=> 
<Link to={href} data-rb-event-key={href} className={`nav-link ${extraClass}`}>
 {children}</Link>

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

handleNavValues =()=>{
let navLinkLogIn;
let navCallToAction =       
<NavLink extraClass="navFade"  href="/search-studio">      
Book Now{" "}
<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
</NavLink >

if(this.props.auth){
 navLinkLogIn = 
<Nav className="ml-auto">
<NavLink key="post-studio" href="/post-studio"><i className="fa fa-plus"></i> Add Your Studio
</NavLink>
<NavLink key="userprofile" href="/userprofile"><i className="fa fa-user"></i>
{this.props.auth.username?this.props.auth.username: this.props.auth.contact_name+"'s Account"}
</NavLink>
<NavLink key="logout" href="/api/logout">Logout</NavLink>
</Nav>

}

else{
  navLinkLogIn = <Nav className="ml-auto"><NavLink key="post-studio" href="/post-studio">
  <i className="fa fa-plus"></i>Add Your Studio
</NavLink>,
<NavLink key="sign-up" href="/log-in">Sign Up/Login</NavLink></Nav>
}


return [navLinkLogIn, navCallToAction]

 }
  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return this,this.handleNavValues().map((value, i) => {
          return value;
        });
      default:
        return this.handleNavValues().map((value, i) => {
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
              <Link to="/"><img src={logo} width="80px" /></Link>Beta
            </Navbar.Brand>
        
            <Navbar.Collapse id="basic-navbar-nav" className="web-nav">
            {this.renderContent()}
              {/* <NavLink>
                <i className="fa fa-search" onClick={revealSearch}></i>
              </NavLink> */}
             
              
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
