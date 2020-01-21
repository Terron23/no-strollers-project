import React, { Component } from "react";
import { connect } from "react-redux";
import Title from "../../Reusable/Title/Title";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import SocialAuth from "../SocialAuth/SocialAuth";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./css/sign-up.css";



const LocalAuthSignUp = ({
  error,
  handleValidation,
  handlePassword,
  passwordValidate,
  password,
  validate,
  validateStrength
}) => {
  return (
    <div className={`col-md-4 offset-md-4`}>
      <div className="form-group">
        <label htmlFor="email">User Name:</label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="username"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <p className="error-text">{error}</p>
        <div className="validate-bg">{validateStrength}</div>
        <input
          type="password"
          name="password"
          className="form-control"
          id="pwd"
          value={password}
          onChange={handlePassword}
          autoComplete="on"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">Validate Password:</label>
        <p className="error-text">{validate}</p>
        <input
          type="password"
          name="passwordValidate"
          className="form-control"
          id="pwdValidate"
          value={passwordValidate}
          onChange={handleValidation}
          autoComplete="on"
          required
        />
      </div>
      <div className="form-group">
        <Link to="/log-in">Already A Member - Log In</Link>
      </div>

      <button type="submit" className="btn roberto-btn btn-2 sign-btn">
        Submit
      </button>
    </div>
  );
};

class SignUp extends Component {
  state = {
    error: "",
    password: "",
    passwordValidate: "",
    validate: "",
    validateStrength: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let username = e.target.username.value;
    let passwordValidate = e.target.passwordValidate.value;
    let signup = true;
    let url = this.props.location.pathname+this.props.location.search
    if (password.length < 5) {
      this.setState({ error: "Password Should be more than 5 characters" });
      return;
    } else if (passwordValidate !== password) {
      return;
    } else {
      axios
        .post(`/auth/signup/local?path=${url}`, {
          email,
          password,
          username,
          signup
        })
        .then(res => {
          window.location.href=`${res.data.data}`
        })
        .catch(err => {
          if (err.response.status === 401) {
            this.setState({ error: "User Name or Email Already Exists" });
          }
        });
    }
  };

  handleValidation = e => {
    e.preventDefault();
    let { passwordValidate, password } = this.state;
    this.setState({
      passwordValidate: e.target.value,
      validate:
        password === e.target.value && e.target.value !== ""
          ? ""
          : "Passwords Do Not Match"
    });
  };

  handlePassword = e => {
    e.preventDefault();
    let { passwordValidate, password } = this.state;
    this.setState({
      password: e.target.value,
      validate:
        passwordValidate === e.target.value && e.target.value !== ""
          ? ""
          : "Passwords Do Not Match"
    });
  };

  handlePasswordStrength = value => {
    let mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    let strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (strongRegex.test(value) && value.length > 5) {
      return (
        <ProgressBar variant="success" now={100} label="Strong Password" />
      );
    } else if (mediumRegex.test(value) && value.length > 5) {
      return <ProgressBar variant="warning" now={60} label="Medium strength" />;
    }

    return value.length > 0 ? (
      <ProgressBar variant="danger" now={40} label="Weak strength" />
    ) : (
      <ProgressBar variant="danger" now={0} label="No Value" />
    );
  };

  render() {
    let { error, password, validate, } = this.state;
    console.log(this.props)
    return (
      <div className="container-fluid signup">
        <Title headerTitle="Sign Up" />
        <SocialAuth url={this.props.location.pathname+this.props.location.search}/>
        <form onSubmit={this.handleSubmit}>
          <LocalAuthSignUp
            error={error}
            handleValidation={this.handleValidation}
            handlePassword={this.handlePassword}
            password={password}
            validate={validate}
            validateStrength={this.handlePasswordStrength(password)}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withRouter(SignUp));
