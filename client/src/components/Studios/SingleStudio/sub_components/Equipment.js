import React from "react";

const Equipment = ({ equipment, title }) => {
  return (
    <div className="room-service mb-50">
      <h4>{title}</h4>

      <ul>
        {equipment.split(",").map((s, i) => (
          <li key={i}>
            <i className="sh-text fa fa-trophy"></i> {s}
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default Equipment;
