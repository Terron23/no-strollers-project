import React, { Component } from "react";
import DatePicker from "react-bootstrap-date-picker";


class DatePickerBootsrap extends Component {
    constructor(){
        super();

        this.state={
            value: new Date().toISOString()
        }
    }


  handleChange =(value, formattedValue) =>{
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    });
  }

  componentDidUpdate(){
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById("example-datepicker");
    console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
  }

  render(){
    return (<FormGroup>
      <ControlLabel>Label</ControlLabel>
      <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
      <HelpBlock>Help</HelpBlock>
    </FormGroup>)
  }
};

export default DatePickerBootsrap;