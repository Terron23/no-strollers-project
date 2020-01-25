import React from "react";
import "./css/sidenav.css"

export default ({active1='inactive', active2='inactive', active3='inactive', 
title1="Studio Contact & Prices",
title2="Studio Images",
title3="Studio Details",
link,
disabled=true}) => {
  return (
    <section className="container form-nav">
       <ul className="form-list">
       <li className={`${active1}`}><i className="fa fa-users"></i> {title1}</li>
       <li className={`${active2}`}><i className="fa fa-image"></i> {title2}</li>
       <li className={`${active3}`}><i className="fa fa-list-alt"></i> {title3}</li>
       </ul>
    </section>
  );
};
