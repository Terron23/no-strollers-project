import React from 'react';
import { Link } from "react-router-dom";

export default ({link, text}) => {
    return (
<Link to={link} className="">{text}</Link>
    );
  };