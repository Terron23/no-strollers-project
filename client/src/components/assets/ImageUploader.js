import React, { Component } from "react";
import ImagesUploader from "react-images-uploader";

export default class ImageUploader extends Component {
  render() {
    return (
      <ImagesUploader
        url="http://localhost:9090/multiple"
        optimisticPreviews
        onLoadEnd={err => {
          if (err) {
            console.error(err);
          }
        }}
        label="Upload multiple images"
      />
    );
  }
}
