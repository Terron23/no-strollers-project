import React from "react";
import { Link } from "react-router-dom";
import "./css/sidenav.css";

const LinkNav = ({ children, link = "/", disabled }) => {
  if (disabled) {
    return children;
  }

  return (
    <Link className="side-nav-link" to={link}>
      {children}
    </Link>
  );
};

export default ({
  active1 = "inactive",
  active2 = "inactive",
  active3 = "inactive",
  title1 = "Studio Contact & Prices",
  title2 = "Studio Images",
  title3 = "Studio Details",
  link1 = "/post-studio",
  link2 = "/design",
  link3 = "/details",
  id,
  studioName,
  disabled = true
}) => {
  return (
    <section className="container form-nav">
      <ul className="form-list">
        <li className={`${active1}`}>
          <LinkNav disabled={disabled} link={`${link1}/${studioName}/${id}`}>
            <i className="fa fa-users"></i>
            {title1}{" "}
          </LinkNav>
        </li>
        <li className={`${active2}`}>
          <LinkNav disabled={disabled} link={`${link2}/${studioName}/${id}`}>
            {" "}
            <i className="fa fa-image"></i>
            {title2}
          </LinkNav>
        </li>{" "}
        <li className={`${active3}`}>
          <LinkNav disabled={disabled} link={`${link3}/${studioName}/${id}`}>
            <i className="fa fa-list-alt"></i>
            {title3}
          </LinkNav>
        </li>
      </ul>
    </section>
  );
};
