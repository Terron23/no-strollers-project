import React, { Component } from "react";

export default class Title extends Component {
  render() {
    let { classProp } = this.props;
    return (
      <div
        className={
          classProp === "" || !classProp ? `container text-center` : classProp
        }
        style={!this.props.margin ? styles.titleStyle : ""}
      >
        <hr />
        <h2>{this.props.header}</h2>
        <small>{this.props.subtitle}</small>
        <hr />

        <div className="container-fluid">{this.props.children}</div>
      </div>
    );
  }
}

const styles = {
  titleStyle: {
    width: "100%",
    marginTop: 25,
    marginBottom: 50
  }
};
