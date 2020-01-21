import React, { Component } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import axios from "axios";

const StudioDropZone = ({ studioid, studioname, history, classProp }) => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta, file }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (event, files) => {
    let imgObj = {};
    files.forEach((file, i) => {
      let formData = new FormData();
      formData.append("file", file.file);
      formData.append("upload_preset", "nyv0ihyq");
      formData.append("folder", `${studioname}_${i===0?"main_":""}${studioid}`);
      formData.append(
        "public_id",
        file.file.name.split(".")[0] + "_" + studioname + "_" + studioid
      );
      formData.append("tags", [studioid, studioname, file.file.name]);
      axios
        .post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)
        .then(cloudResponse => {
          console.log(cloudResponse.data);
          let studioImageSecondaryMain = cloudResponse.data.url;
          let studioImageSecondarySecure = cloudResponse.data.secure_url;
          imgObj[i] = studioImageSecondaryMain;

          if (Object.values(imgObj).length === files.length) {
            axios
              .put("/api/v2/post-images", {
                studioid,
                studioname,
                studioImageSecondary:imgObj,
                
              })
              .then(res => {
                history.push(`/details/${studioname}/${studioid}`);
              });
          }
        })
        .catch(err => console.log(err));
    });
  };

  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        submitButtonContent="Save & Continue"
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,video/*"
        styles={styles}
        inputContent={`Upload images for ${studioname}`}
        inputWithFilesContent="Add More Files"
        classNames={classNames}
      />
    </div>
  );
};
const classNames = {
  submitButtonContainer: "btn roberto-btn w-100",
  previewImage: "room-thumbnail col-md-4",
  previewStatusContainer: "col-md-8"
};

const styles = {
  inputLabel: {
    color: "#2CBBBB"
  },

  dropzone: {
    background: "#0e2737",
    width: "100%",
    height: "100%"
  },

  inputLabelWithFiles: {
    background: "transparent"
  },
  submitButton: {
    background: "transparent"
  }
};

export default StudioDropZone;
