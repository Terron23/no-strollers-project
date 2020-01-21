import React, { Component } from "react";
import Portfolio from "./Portfolio";
import { Link } from "react-router-dom";

const PortfolioComponent = ({ image, link, city }) => {
  return (
    <div class="col-lg-4 col-sm-6">
      <Link class="portfolio-box" to={link}>
        <img class="img-fluid" src={image} alt="" style={styles.imgStyle} />
        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">{city}</div>
          <div class="project-name"></div>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  imgStyle: {
    height: 300,
    width: 550
  }
};

export default PortfolioComponent;
