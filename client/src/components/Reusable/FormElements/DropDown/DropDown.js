import React, { Component } from "react";

const DropDown =({options, label, classProp, value, name, required=false})=> {

    return (
      <div className={`form-group ${classProp}`}>
        <label htmlFor={label}>{label}</label>
        <select className={`form-control`} name={name} required={required}>
          <option value="">Please Choose</option>
          {options}
        </select>
      </div>
    );
  
}

export default DropDown;
