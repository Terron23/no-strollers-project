import React, { Component } from "react";
import S3 from "react-aws-s3";
import "./css/s3.css";
import axios from "axios";
import AlertMessage from '../Alert/AlertMessage'

class FileUpload extends Component {
  state = {
    image: this.props.image,
    variant: "",
    alertText: "",
    hide: false,
    delete: false,
    submitBtn: ""
  };
  handleUploads = e => {
    e.preventDefault();
    const config = {
      bucketName: process.env.REACT_APP_PLACE,
      dirName: `Images/${this.props.id}/User_Image` /* optional */,
      region:process.env.REACT_APP_DESTINATION,
      accessKeyId: REACT_APP_ACCESS_GOOGLE_ID,
      secretAccessKey: process.env.REACT_APP_SECRET_ID
    };

    const ReactS3Client = new S3(config);
    let fileName = `${this.props.id}_UserImage_${Date.now().toString()}`;
    ReactS3Client.uploadFile(e.target.uploads.files[0], fileName)
      .then(data => {
        let image = data.location;
        axios
          .put("/api/v2/update-user-image", {
            image
          })
          .then(res => {
            this.setState({ image, variant: "success", hide: true, 
            alertText: "Image Uploaded Successfully" });
            console.log(this.state, "state")
          })
          .catch(err => {
            ReactS3Client.deleteFile(fileName)
              .then(response => console.log(response))
              .catch(err => console.error(err));
          });
      })
      .catch(err => console.error(err));
  };

  handleFileUpload = e => {
    e.preventDefault();
    let objectURL = URL.createObjectURL(e.target.files[0]);

    this.setState({
      image: objectURL,
      submitBtn: (
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success btn-sm">
            Submit
          </button>
          <button
            type="btn"
            onClick={this.handleDelete}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      ),
      delete: false
    });
  };

  handleDelete = e => {
    e.preventDefault();
    this.setState({ delete: true, image: this.props.image, submitBtn: "" });
  };

  handleClose =(e)=>{
this.setState({hide: false})
  }

  render() {
    let { image, submitBtn, alertText, variant, hide } = this.state;
    return (
      <div>
       
        <AlertMessage alertText={alertText} variant={variant} hide={hide} 
        handleClose={this.handleClose}/>
      <form onSubmit={this.handleUploads}>
      
        <label htmlFor="photo-upload" className="custom-file-upload fas" id="profile-label">
          <div className="img-wrap fa fa-upload">
            <img for="photo-upload" src={image} id="profile-image"/>
          </div>
          <input
            id="photo-upload"
            type="file"
            onChange={this.handleFileUpload}
            name="uploads"
          />
        </label>
        {submitBtn}
      </form>
      </div>
    );
  }
}

export default FileUpload;
