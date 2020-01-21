import React, { Component } from "react";
import BG1 from "../../images/bg_1.jpg";
import Typist from "react-typist";
import "node_modules/react-typist/dist/Typist.css";
import "node_modules/react-typist/dist/Typist.js";

class StudioHero extends Component {
  render() {
    return (
      <div
        className="block-30 block-30-sm item"
        style={{ backgroundImage: `url(${BG1})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span className="subheading-sm">Studios</span>
              <Typist>
                <h2 className="heading">Indulge Your Passion</h2>
              </Typist>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudioHero;
