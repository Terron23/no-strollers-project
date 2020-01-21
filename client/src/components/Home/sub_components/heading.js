import React from "react";

const Heading = ({ title, subtitle, color }) => {
  return (
    <div class="col-12">
      <div
        class="section-heading text-center wow fadeInUp"
        data-wow-delay="100ms"
      >
        <h6>{title}</h6>
        <h4 style={{ color: color }}>{subtitle}</h4>
      </div>
    </div>
  );
};

export default Heading;
