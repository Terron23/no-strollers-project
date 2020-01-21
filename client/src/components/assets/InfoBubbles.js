import React, { Component } from "react";

export default class InfoBubble extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className={`col-lg-12 ${this.props.order}`}>
          <div className="">{this.props.img}</div>
        </div>
        <div className={`col-lg-12 ${this.props.orderText}`}>
          <div>
            <h5>{this.props.infoTitle}</h5>
            <p>{this.props.infoText}</p>
          </div>
        </div>
      </div>
    );
  }
}
