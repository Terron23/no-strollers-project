import React, { Component } from "react";
import PortfolioComponent from "./portfolioComp";
import BG1 from "../.././images/city/ny.jpg";
import BG2 from "../.././images/city/vegas.jpg";
import BG3 from "../.././images/city/la.jpg";
import BG4 from "../.././images/city/seattle.jpg";
import BG5 from "../.././images/city/bklyn.jpg";
import BG6 from "../.././images/city/no.jpg";

export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div class="container-fluid p-0">
          <div class="row no-gutters">
            <PortfolioComponent
              link="/search-studio/All/New York"
              image={`${BG1}`}
              city="New York"
            />

            <PortfolioComponent
              link="/search-studio/All/Las Vegas"
              image={`${BG2}`}
              city="Las Vegas"
            />

            <PortfolioComponent
              link="/search-studio/All/Hollywood"
              image={`${BG3}`}
              city="HollyWood"
            />

            <PortfolioComponent
              link="/search-studio/All/Seattle"
              image={`${BG4}`}
              city="Seattle"
            />

            <PortfolioComponent
              link="search-studio/All/brooklyn"
              image={`${BG5}`}
              city="Brooklyn"
            />

            <PortfolioComponent
              link="/search-studio/All/no"
              image={`${BG6}`}
              city="New Orleans"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <a className="btn btn-secondary btn-lg" href="/search-studio">
            Explore More Studios
          </a>
        </div>
      </section>
    );
  }
}

const styles = {
  imgStyle: {
    height: 300,
    width: 550
  }
};
