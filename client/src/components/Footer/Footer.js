import React, { Component } from "react";
import { Link } from "react-router-dom";
import Subcribe from './sub_components/Subscribe'
import Social from '../Reusable/Social_Links/Social'
import f_logo from "./images/sh_logo.png";
import "./css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-padding-80-0">
        <div className="main-footer-area">
          <div className="container">
            <div className="row align-items-baseline justify-content-between">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <Link to="/" className="footer-logo">
                    <img src={f_logo} width="50%" />
                  </Link>

               <a style={{"color":"white"}} href="mailto:studiohunt@outlook.com" target="_blank">studiohunt@outlook.com</a>
                </div>
              </div>

              <div className="col-12 col-sm-4 col-lg-2">
                <div className="single-footer-widget mb-80">
                  <h5 className="widget-title">Explore</h5>

                  <ul className="footer-nav">
                    <li>
                      <Link to="/">
                        <i className="fa fa-caret-right"></i> Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/search-studio">
                        <i className="fa fa-caret-right"></i> Book Now
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-caret-right"></i> Career
                      </Link>
                    </li>
                    <li>
                      <Link to="/faqs">
                        <i className="fa fa-caret-right"></i> FAQs
                      </Link>
                    </li>
                    <li>
                      <Link to="/policy">
                        <i className="fa fa-caret-right"></i> Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
<Subcribe />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copywrite-content">
            <div className="row align-items-center">
              <div className="col-12 col-md-8">
                <div className="copywrite-text">

                <p>
Copyright &copy; {new Date().getFullYear()} All rights reserved | TM Madison Designs 
</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="social-info">
                  <Social 
                  link="https://www.facebook.com/Studio-Hunt-337007926930145/?modal=admin_todo_tour"
                  icon="facebook"
                  />
                   <Social 
                  link="https://twitter.com/StudioHunt_"
                  icon="twitter"
                  />
                   <Social 
                  link="https://www.instagram.com/studio.hunt/"
                  icon="instagram"
                  />
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
