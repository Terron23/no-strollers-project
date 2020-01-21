import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardInfo extends Component {
  render() {
    return (
      <div className="container">
        <h5 className="heading">{this.props.studioName}</h5>
        <div className="row">
          <div className="col-md-6">
            <small>{this.props.studioType}</small>
          </div>
          <div className="price col-md-6">
            <sup>$</sup>
            <span className="number">{this.props.price}</span>
            <sub>/per hour</sub>
            <br />
            {this.props.city}
          </div>
        </div>
        <p className="text-center">
          {" "}
          <Link
            style={{ marginTop: 20 }}
            to={`/find-studio/${this.props._id}`}
            className="btn btn-secondary"
          >
            View More
          </Link>
        </p>
      </div>
    );
  }
}
