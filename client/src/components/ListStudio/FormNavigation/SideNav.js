import React from "react";
import "./css/sidenav.css"

export default ({active1='inactive', active2='inactive', active3='inactive'}) => {
  return (
    <section className="container form-nav">
       <ul className="form-list">
       <li className={`${active1}`}><i className="fa fa-users"></i> Studio Contact</li>
       <li className={`${active2}`}><i className="fa fa-image"></i> Studio Images</li>
       <li className={`${active3}`}><i className="fa fa-list-alt"></i> Studio Details</li>
       </ul>
    </section>
  );
};
