import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudioType } from "../../../../actions";

const Pagination = ({ total }) => {
  return (
    <nav className="roberto-pagination">
      <ul className="pagination">
        {}
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next <i className="fa fa-angle-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
