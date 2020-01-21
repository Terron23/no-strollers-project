import React from "react";

const Input =({name, placeholder, id, value,  label, classProp, type,  autoComplete, 
  required=false, multiple, handleChange} )=> {
return (
      <div className={`form-group ${classProp} `}>
          <label htmlFor={label}>{label}</label>
       
        <input
          type={type}
          id={id}
          className={`form-control`}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
          autoComplete={autoComplete}
         required={required}
         multiple={multiple ? "true": "false"}
         onChange={handleChange}
        />
      </div>
   
    );
  
}

export default Input;
