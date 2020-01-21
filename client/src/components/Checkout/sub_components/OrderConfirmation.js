import React, { Component } from "react";

class Confirmation extends Component {
  render() {
    return (
      <div
        style={styles.confirmationStyle}
        className="container site-section text-center"
      >
        <h2>Thank You for Booking with Us!</h2>
      </div>
    );
  }
}

const styles = {
  confirmationStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 80,
    textTransform: "underline"
  }
};

export default Confirmation;
