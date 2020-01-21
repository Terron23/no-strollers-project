import React from "react";

const TextArea= ({name, placeholder, handleChange, value, multiple, label, classProp, type, required,})=> {
 
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
          required={required}
        ></textarea>

      </div>
   
    );
  
}

export default TextArea;
