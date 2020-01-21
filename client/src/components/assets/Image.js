import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img
          className={this.props.classProp}
          src={this.props.src}
          style={styles.imageStyle}
          alt={this.props.alt}
        />
      </div>
    );
  }
}

const styles = {
  imageStyle: {
    width: 299,
    height: 199,
    padding: 5
  }
};
