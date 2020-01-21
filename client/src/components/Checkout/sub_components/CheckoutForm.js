import React, { Component } from "react";
import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";
import {Container, Row, Col} from 'react-bootstrap'
import Title from "../../Reusable/Title/Title";
import Loading from "../../Reusable/Loading/Loading";

class CheckoutForm extends Component {
  constructor(props){
    super(props);
    this.state={
      alert: false,
      error: ""
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    let { auth, studio } = this.props;
    let name = e.target.name.value;
    let studioName=studio.studio_name;
    let email = e.target.email.value
    let payment = this.props.charge;
    let studioId = ""
    
    studio.map(s=>{
      studioId=s._id
    });

    try {
      let { token } = await this.props.stripe.createToken({ 
        name: new Date().toString() 
      });
      let response = await axios.post("/api/v2/payment", {
        token: token.id,
        studioName,
        payment,
        studioid: studioId,
        cardInfo: "",
        email
      });
      this.props.push();
    } catch(e) {
      this.setState({error:e,})
    }
  };

  render() {

    let {
      auth,
      studio,
      checkoutDetails
    } = this.props;

    if(studio.length < 1){
      return <Loading />
    }
    return (
     <Container>
       
       <Row>
          <Title headerTitle="Book Your Session" />
          <div className="checkout col-md-8">
           
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  defaultValue={auth.email}
                />
              </div>

              <div className="form-group">
                <label for="email">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  defaultValue={auth.contact_name}
                />
              </div>

              <div className="form-group">
                <label>Card Information</label>
                <CardElement className="form-control" />
              </div>
              <button className="btn roberto-btn w-100" type="submit">
                Reserve
              </button>
            </form>
          </div>

          <div className="col-md-4">{checkoutDetails()}</div>
        </Row>
        </Container>
    );
  }
}

export default injectStripe(CheckoutForm);
