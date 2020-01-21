import React, { Component } from "react";
import { Link } from "react-router-dom";



class ViewStudio extends Component {
  render() {
    return (
      <div
        style={styles.confirmationStyle}
        className="container site-section text-center"
        
        style={{"padding":"5%"}}
      >
        <h2>Thank You for Listing Your Studio With Us</h2>
        <Link className="btn roberto-btn w-100 col-6" 
        to={`/single-studio/${this.props.match.params.id}`}
        >
            View Your Studio
            </Link>
      </div>
    );
  }
}

const styles = {
  confirmationStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 80,
    textTransform: "underline"
  }
};

export default ViewStudio;
