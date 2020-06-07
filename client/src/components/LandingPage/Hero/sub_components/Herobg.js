import React, {Component} from "react";
import { Link } from "react-router-dom";
import Emails from "./Emails";

class  Herobg extends Component {
constructor(props){
  super(props);
  
  this.state={
    setShow: false
  }
}

  handleShow = e => {
    e.preventDefault();
    if (!this.state.setShow) {
      this.setState({ setShow: true });
    } else {
      this.setState({ setShow: false });
    }
  };
  render(){
    let { bg, logo } = this.props;
  return (
    <div 
      className="single-welcome-slide bg-img bg-overlay animateOut animateIn"
      style={{backgroundImage: `url(${bg})` }}
      data-img-url={`${bg}`}
    >
      <div className="welcome-content h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="welcome-text text-center">
                <h6 data-animation="fadeInUp" data-delay="200ms"></h6>
                <h2 data-animation="fadeInUp" data-delay="500ms">
                  Studio Hunt
                </h2>
                <h6 data-animation="fadeInUp" data-delay="200ms">Coming Soon!</h6>
                <p className="col-6 offset-3" 
                style={{"color": "white", 
                "border": "solid white 3px",
                "padding": "15px"
              }}>
                  Great experiences start here. Studio Hunt is your connection to studios of all varieties. From music to art , sharpen your skills, have some fun, and indulge your creative side at a studio near you. 
<hr />
                  <a 
                  className="btn roberto-btn btn-2"
                 onClick={this.handleShow}
                >Subscribe</a>

                  </p>
              
                <Emails setShow={this.state.setShow}/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Herobg;
