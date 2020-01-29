import React, { Component } from "react";
import S3 from "react-aws-s3";
import "./css/s3.css";
import axios from "axios";

class FileUpload extends Component {
  state = {
    image: this.props.image,
    variant: "",
    hide: false,
    delete: false,
    submitBtn: ""
  };
  handleUploads = e => {
    e.preventDefault();
    const config = {
      bucketName: "studio-hunt",
      dirName: `Images/${this.props.id}/User_Image` /* optional */,
      region: "us-east-2",
      accessKeyId: "AKIAX6UZRIDU6RSJKJ7B",
      secretAccessKey: "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"
    };

    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(
      e.target.uploads.files[0],
      `${this.props.id}_UserImage`
    )
      .then(data => {
        let image = data.location;
        axios
          .put("/api/v2/update-user-image", {
            image
          })
          .then(res => {
            this.setState({ image, variant: "success", hide: "" });
          })
          .catch(err => {
            ReactS3Client.deleteFile(`${this.props.id}_UserImage`)
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
      submitBtn: <div className="btn text-center">
      <button type="submit" className="btn btn-primary btn-sm image-btn">
        Submit
      </button>
      <button
        type="btn"
        onClick={this.handleDelete}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    </div>, delete: false
    
    });
  
  };

  handleDelete =(e)=>{
    e.preventDefault()
    this.setState({delete: true, image: this.props.image, submitBtn:""})
  }

  render() {
    let { image, submitBtn } = this.state;
    return (
      <form onSubmit={this.handleUploads}>
        <img src={image} className="userImage" />

        <input
          type="file"
          name="uploads"
          className="btn"
          id="s3file"
          onChange={this.handleFileUpload}
        />
        <label htmlFor="s3file">Upload User Image</label>
        {submitBtn}
      </form>
    );
  }
}

export default FileUpload;
