import React from "react";

const Bonus = ({includes, title}) => {
    return (
      <div class="room-service mb-50">
  <h4>{title}</h4>
  
        <ul>
          {includes.split(",").map(s=>
          <li>
          <i className="sh-text fa fa-star"></i> {s}
          </li>)}
          
        
        </ul>
        <div >
       
        </div>
    
      </div>
    );
  };
  
  export default Bonus;