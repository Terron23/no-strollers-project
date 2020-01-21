import React, { Component } from "react";


const SocialAuth = ({url="/"}) => {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <a
            className="btn btn-block roberto-btn btn-1"
            href={`/auth/google?path=${url}`}
          >
            Login With Google
          </a>
          <a
            className="btn btn-block roberto-btn btn-1"
            href={`/auth/facebook?path=${url}`}
          >
            Login With Facebook
          </a>
          <hr />
        </div>
      </div>
    );
  };

  export default SocialAuth;