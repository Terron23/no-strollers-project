import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }
  componentDidMount() {

    let images = [];

    let arr = this.props.thumbnails.forEach(img => {
      images.push({ original: img, thumbnail: img });
    });

    this.setState({ images });
  }

  render() {
    const images = this.state.images;

    return (
      <ImageGallery
        items={images}
        lazyLoad={true}
        showBullets={true}
        showFullscreenButton={true}
        additionalClass="single-studio-gallery"
        showThumbnails={true}
        useBrowserFullscreen={true}
        autoPlay={true}
        
      />
    );
  }
}
