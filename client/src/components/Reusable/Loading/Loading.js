import React from "react";
import "./css/loading.css"

 
// Can be a string as well. Need to ensure each key-value pair ends with ;

 
export default class Loading extends React.Component {

 
  render() {
    return (
        <div id="preloader">
        <div className="loader"></div>
    </div>
    );
  }
}