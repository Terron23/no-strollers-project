import React from "react";

const Equipment = ({ equipment, title }) => {
  return (
    <div class="room-service mb-50">
      <h4>{title}</h4>

      <ul>
        {equipment.split(",").map(s => (
          <li>
            <i className="sh-text fa fa-trophy"></i> {s}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default Equipment;
