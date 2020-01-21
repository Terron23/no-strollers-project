import React, { Component } from "react";
import bg1 from "../images/59.jpg";
import { Link } from "react-router-dom";

const StudioSearchHeader = ({bg, slideNum}) => {
  return (
    <div
      className={`breadcrumb-area bg-img bg-overlay jarallax ${slideNum}`}
      style={styles.bg1}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="breadcrumb-content text-center">
              <h2 className="page-title">Our Studios</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Studios
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bg1: {
    backgroundImage: `url(${bg1})`
  }
};
export default StudioSearchHeader;
