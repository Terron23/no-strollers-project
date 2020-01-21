import React, { Component } from "react";

class NavSearch extends Component {
  render() {
    let { active } = this.props;
    return (
      <div
        className={`search-form ${
          active ? "search-form-active" : ""
        } d-flex align-items-center`}
      >
        <div className="container">
          <form action="/" method="">
            <input
              type="search"
              name="search-form-input"
              id="searchFormInput"
              placeholder="Type your keyword ..."
            />
            <button type="submit">
              <i className="icon_search"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NavSearch;
