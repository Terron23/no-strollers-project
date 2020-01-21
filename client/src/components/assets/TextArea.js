import React, { Component } from "react";

class TextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {name, placeholder, handleChange, value, multiple, label, classProp, type, prepend} = this.props;
    return (
      <div className={`form-group ${classProp} `}>
          <label htmlFor={label}>{label}</label>
       
        <textarea
          type={type}
          className={`form-control`}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          defaultValue={value}
          multiple={multiple === "true" ? true : false}
        ></textarea>

      </div>
   
    );
  }
}

export default TextArea;
