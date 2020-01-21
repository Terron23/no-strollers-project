import React, { Component } from "react";
import { Link } from "react-router-dom";
import postStudio from './images/57.jpg';
import './css/cta.css';

export default class PostStudio extends Component {
  render() {
    return (
      <section className="roberto-cta-area" style={{ padding: "50px" }}>
        <div className="container">
          <div
            className="cta-content bg-img bg-overlay jarallax"
            style={{ backgroundImage: "url("+postStudio+")" }}
          >
            <div className="row align-items-center">
              <div className="col-12 col-md-7">
                <div className="cta-text mb-50">
                  <h2>Add A Studio</h2>
                  <h6>Set your prices & book new clients.</h6>
                </div>
              </div>
              <div className="col-12 col-md-5 text-right">
                <Link to="/post-studio" className="btn cta-btn mb-50">
                  Add Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
