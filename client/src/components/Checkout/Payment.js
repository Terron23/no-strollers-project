import React, { Component, Fragment } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./sub_components/CheckoutForm";
import { connect } from "react-redux";
import { fetchUser, fetchSingleStudio } from "../../actions";
import { ListGroup, ListGroupItem, Badge } from "react-bootstrap";
import Login from "../OAuth/LogIn/Login";
import Loading from "../Reusable/Loading/Loading";
import { handleHoursMin, handleQueryString } from "../Reusable/Helpers/Helper";
import "./css/payment.css";

const SHListGroupItem = ({ detailTitle, detail, detailRight, children }) => {
  return (
    <ListGroupItem>
      <span className="checkout-details">{detailTitle}</span>
      <span className="pull-right">{detail}</span>
      <span className="pull-right">{detailRight}</span>
      <br />
      {children}
    </ListGroupItem>
  );
};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charge: 0
    };
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchSingleStudio(this.props.match.params.studioid);
  }

  handlePayment = (showList = false) => {
    const search = handleQueryString(this.props.location.search);
    let total = [];
  let studio_price =  this.props.studio.map(studio => studio.studio_price)
      let list = search.Date.map((x, i) => {
      let time = handleHoursMin(search["Time In"][i], search["Time Out"][i])
      let price =
        handleHoursMin(search["Time In"][i], search["Time Out"][i]) *
       studio_price;
      total.push(price);
      return (
        <SHListGroupItem detailTitle="Reserved Date & Time">
          <span className="pull-left">
            {search["Date"][i]}
            <br />
            <small>
              {search["Time In"][i]} - {search["Time Out"][i]}{" "}
            </small>
          </span>
          <span className="pull-right">
            ${price.toFixed(2)}
            <br />
            <small>
              {Number(studio_price).toFixed(2)} X {time}hr
            </small>
          </span>
        </SHListGroupItem>
      );
    });

    if (!showList) {
      return total.reduce((a, b) => a + b).toFixed(2);
    }

    return list;
  };

  checkoutDetails = () => {
    const search = handleQueryString(this.props.location.search);
    let total = [];
    let totalOrder = search.Date.length;
    return this.props.studio.map(studio => {
      return (
        <div>
          <h4>
            Your Reservation{" "}
            <Badge pill variant="secondary" className="sh-badge">
              {totalOrder}
            </Badge>
          </h4>
          <ListGroup>
            <SHListGroupItem
              detailTitle="Studio Name"
              detail={studio.studio_name}
            />
            <SHListGroupItem
              detailTitle="Studio Price Per Hour"
              detail={`$${studio.studio_price.toFixed(2)}`}
            />
            {this.handlePayment(true)}
            <SHListGroupItem
              detailTitle="Total"
              detailRight={`$${this.handlePayment()}`}
            />
          </ListGroup>
        </div>
      );
    });
  };

  push = () => {
    return this.props.history.push("/confirmation");
  };

  render() {
    if (this.props.auth === false) {
      return <Login />;
    } else if (!this.props.studio || this.props.auth == null) {
      return <Loading />;
    }

    return (
      <div className="container">
        <StripeProvider apiKey="pk_test_si8mdcnBScBgROVlk6i3lc7b">
          <Elements>
            <CheckoutForm
              studio={this.props.studio}
              checkoutDetails={this.checkoutDetails}
              handleSubmit={this.handleSubmit}
              auth={this.props.auth}
              push={this.push}
              charge={this.handlePayment()}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

function mapStateToProps({ auth, studio }) {
  return { auth, studio };
}

export default connect(mapStateToProps, { fetchUser, fetchSingleStudio })(
  Payment
);
