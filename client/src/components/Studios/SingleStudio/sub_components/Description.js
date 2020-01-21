import React from "react";

const Description = ({ description, title }) => {
  return (
    <div class="room-service mb-50">
      <h4>{title}</h4>

      <div>{description}</div>
    </div>
  );
};

export default Description;
