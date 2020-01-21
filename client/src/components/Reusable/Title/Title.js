import React, { Component } from "react";
import './css/title.css'

export default class Title extends Component {
  render() {
    let { classProp } = this.props;
    return (
      <div
        className={`studio-hunt-title ${!classProp ? `container text-center` : classProp
        }`}>
        <hr />
        <h2>{this.props.headerTitle}</h2>
        <small>{this.props.subtitle}</small>
        <hr />
      </div>
    );
  }
}

