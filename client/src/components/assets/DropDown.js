import React, { Component } from "react";

class DropDown extends Component {
  render() {
    return (
      <div className={`form-group ${this.props.classProp}`}>
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <select className={`form-control`} name={this.props.name}>
          <option value="">Please Choose</option>
          {this.props.options()}
        </select>
      </div>
    );
  }
}

export default DropDown;
