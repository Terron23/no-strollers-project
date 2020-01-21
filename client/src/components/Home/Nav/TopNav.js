import React, { Component } from "react";
import Social from '../../Reusable/Social_Links/Social'

class TopNav extends Component {
  render() {
    return (
      <div className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="top-header-content">
                <a href="mailto:studiohunt@outlook.com">
                  <i className="icon_mail"></i>{" "}
                  <span>studiohunt@outlook.com</span>
                </a>
              </div>
            </div>

            <div className="col-6">
              <div className="top-header-content">
                <div className="top-social-area ml-auto">
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
      </div>
    );
  }
}

export default TopNav;
