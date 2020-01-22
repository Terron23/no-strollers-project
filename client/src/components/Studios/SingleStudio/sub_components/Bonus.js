import React from "react";

const Bonus = ({includes, title}) => {
    return (
      <div className="room-service mb-50">
  <h4>{title}</h4>
  
        <ul>
          {includes.split(",").map((s, i)=>
          <li key={i}>
          <i className="sh-text fa fa-star"></i> {s}
          </li>)}
          
        
        </ul>
        <div >
       
        </div>
    
      </div>
    );
  };
  
  export default Bonus;