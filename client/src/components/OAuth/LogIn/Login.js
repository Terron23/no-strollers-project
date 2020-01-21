import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "../../Reusable/Title/Title";
import SocialAuth from '../SocialAuth/SocialAuth'
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./css/login.css";



const LocalAuthLogIn = ({ error }) => {
  return (
    <div className="col-md-4 offset-md-4">
      <div className="form-group">
        <label htmlFor="email">User Name:</label>
        <input
          type="text"
          name="username"
          placeholder="User Name or Email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <p className="error-text">{error}</p>
        <input
          type="password"
          name="password"
          className="form-control"
          id="pwd"
        />
      </div>
      <div className="form-group">
        <Link to="/sign-up">Not A Memember - Sign Up</Link>
      </div>
      <button type="submit" className="btn roberto-btn btn-2 sign-btn">
        Submit
      </button>
    </div>
  );
};





class Login extends Component {
  state = {
    error: "",
  };

  handleSubmit = e => {
    e.preventDefault();

    let password = e.target.password.value;
    let username = e.target.username.value;
    let url = this.props.location.pathname+this.props.location.search
    axios
      .post(`/auth/local?path=${url}`, {
        password,
        username
      })
      .then(res => {
        window.location.href=`${res.data.data}`
        
      })
      .catch(err => {
          console.log(err)
        if (err.response.status === 401) {
          this.setState({ error: "Invalid UserName or Password" });
        }
      });
    
  };



render() {
    let {
      error,
    } = this.state;
    console.log(this.props)
    return (
      <div className="container-fluid signup">
        <Title headerTitle="Sign In"  />
        <SocialAuth url={this.props.location.pathname+this.props.location.search} />
        <form onSubmit={this.handleSubmit}>
           
     <LocalAuthLogIn  error={error} />
          
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withRouter(Login))
