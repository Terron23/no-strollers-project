import React, { Component } from "react";
import TimeDropDown from "../../../Reusable/TimedropDown/TimeDropDown";
import FormAttr from "./FormAttr";
import StudioHuntDatePicker from "../../../Reusable/DatePicker/StudioHuntDatePicker";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
  handleHoursMin,
  handleQueryString
} from "../../../Reusable/Helpers/Helper";
import { withRouter } from "react-router";
let arr =[];
const StudioTemplate = ({
  addForm,
  studioForm,
  startDate,
  handleChangeStartProps,
  revealProps,
  closeSelectBtn,
  handleRevealProp,
  handleTime,
  addField,
  calError,
  timeOutErr,
  price,
  total
}) => {
  let arr = [0];
  return (
    <div>
      <FormAttr label="Check In Date">
        <StudioHuntDatePicker
          type="text"
          classNames="input-small form-control startDate"
          id="singleDatepicker"
          name="singleDatepicker"
          placeholder=""
          autoComplete="off"
          selectRange={false}
          calendarClass={"startDate"}
          required={false}
          stateText={startDate}
          handleChangeStartProps={handleChangeStartProps}
          revealProps={revealProps}
          handleRevealProp={handleRevealProp}
          viewAll={false}
        />
        <p className="error text-center">{calError}</p>
      </FormAttr>

      <div className="row">
        <div className="col-6">
          <FormAttr label="Time In">
            <TimeDropDown
              name="timeIn"
              id="timein"
              handleChange={e => handleTime(e, "timein")}
            />
          </FormAttr>
        </div>
        <div className="col-6">
          <FormAttr label="Time Out">
            <TimeDropDown
              name="timeOut"
              id="timeout"
              handleChange={e => handleTime(e, "timeout")}
            />
          </FormAttr>
        </div>
      </div>
      <div className="row col-12">
        <p className="error text-center">{timeOutErr}</p>
      </div>

      <p className="add-time" onClick={(e)=>addForm(price)}>
        +{addField}
      </p>
      <ListGroup className="select-book-time-group">
        
        {studioForm.map((sched, i) => {
        arr.push(handleHoursMin(sched.timeIn, sched.timeOut) * price)
        
          return (<div>
            <ListGroupItem
              key={i}
              className="text-muted"
              id={`temp_${i}`}
            >
              <span
                onClick={() => closeSelectBtn(`close-select-time-btn${i}`)}
                className="pull-right add-time"
              >
                x
              </span>
              
              Date: {sched.singleDatePicker} <br />
              Time In: {sched.timeIn} Time Out: {sched.timeOut}<br />
              Price: {handleHoursMin(sched.timeIn, sched.timeOut) * price} 
            </ListGroupItem>
          
            </div>
          );
        })}
        { arr.reduce((a, b)=>a+b) > 0 ? 
        <ListGroupItem  className="text-muted">
          <b>Total</b>: ${arr.reduce((a, b)=>a+b).toFixed(2)}
          </ListGroupItem> : ""}
      </ListGroup>
    </div>
  );
};
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date =
  days[new Date().getDay()] +
  " " +
  month[new Date().getMonth()] +
  " " +
  String(new Date().getDate()).padStart(2, "0") +
  " " +
  new Date().getFullYear();

class SingleStudioSideFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      startDate: handleQueryString(this.props.location.search).date,
      studioForm: [],
      clearCal: false,
      reveal: false,
      timeIn: "",
      timeOut: "",
      addField: "Add Date & Time",
      hide: "d-none",
      charge: "",
      calError: "",
      timeInErr: "",
      timeOutErr: "",
      total: 1
    };
  }

  closeSelectBtn = id => {
    let form = this.state.studioForm;
    form.splice(id, 1);
   
    this.setState({
      studioForm: form,
      addField: form.length < 1 ? "Add Date & Time" : this.state.addField
    });
  };




  handleTimeDifference = (timeIn, timeOut, date) => {
    let arg = [timeIn, timeOut, date];

    for (let i = 0; i < arg.length; i++) {
      if (!arg[i]) {
        this.setState({ calError: "Please Fill Out All Values" });
        return false;
      }
    }

    let timeDiff = handleHoursMin(timeIn, timeOut);

    if (new Date(date + " " + timeIn) < new Date()) {
      this.setState({ calError: "Date and/or time has passed already!" });
      return false;
    }
    if (timeDiff < 1) {
      this.setState({ timeOutErr: "Book Time Minumum 1 Hour" });
      return false;
    }
  };

  addForm = (e, total) => {
    let timeIn = this.state.timeIn;
    let timeOut = this.state.timeOut;
    let startDate = this.state.startDate;

    startDate = startDate ? startDate.toString().substring(0, 15) : "";

    let obj = {
      timeIn: timeIn,
      timeOut: timeOut,
      singleDatePicker: startDate
    };

    const timeDiff = this.handleTimeDifference(timeIn, timeOut, startDate);
    let price = handleHoursMin(timeIn, timeOut) * this.state.total;
    if (timeDiff === false) {
      return;
    }

    let values = [obj];

    let form = [...this.state.studioForm, ...values];

    let error = Object.values(obj);
    let noError = 0;

    for (let i = 0; i < error.length; i++) {
      if (!error[i]) {
        noError = 1;
        alert("Please Fill in All Values");
        break;
      }
    }
    if (noError < 1) {
      this.setState({
        studioForm: form,
        total: this.state.total + price ,
        startDate: "",
        timeIn: "",
        timeOut: "",
        addField: "Add More Date & Times",
        calError: "",
        timeOutErr: ""
      });
      this.myFormRef.reset();
    } else {
      noError = 0;
    }
  };

  handleChangeStartProps = date => {
    this.setState({
      startDate: date,
      reveal: false
    });
  };

  handleTime = (e, id) => {
    if (id === "timein") {
      this.setState({ timeIn: e.target.value });
    } else {
      this.setState({ timeOut: e.target.value });
    }
  };

  handleReveal = () => {
    if (this.state.reveal) {
      this.setState({ reveal: false });
    } else {
      this.setState({ reveal: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let { id } = this.props;
    let { studioForm } = this.state;

    if (studioForm.length < 1) {
      alert("Please fill out the form.");
    } else {
      let queryString = "";
      studioForm.map(q => {
        queryString +=
          "Time In=" +
          q.timeIn +
          "?Time Out=" +
          q.timeOut +
          "?Date=" +
          q.singleDatePicker +
          "?";
      });

      this.props.history.push(`/payment/${id}?${queryString.slice(0, -1)}`);
    }
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ hide: "d-none" });
  };

  render() {
    let {
      studioForm,
      startDate,
      reveal,
      addField,
      hide,
      timeInErr,
      timeOutErr,
      calError
    } = this.state;
    return (
      <div className="hotel-reservation--area mb-100">
        <form onSubmit={this.handleSubmit} ref={el => (this.myFormRef = el)}>
          <StudioTemplate
            addForm={this.addForm}
            handleSubmit={this.handleSubmit}
            addForm={this.addForm}
            studioForm={studioForm}
            startDate={startDate}
            handleChangeStartProps={this.handleChangeStartProps}
            handleRevealProp={this.handleReveal}
            revealProps={reveal}
            closeSelectBtn={this.closeSelectBtn}
            handleTime={this.handleTime}
            addField={addField}
            calError={calError}
            timeInErr={timeInErr}
            timeOutErr={timeOutErr}
            price={this.props.price}
            total={this.state.total}
            
          />

          <button type="submit" className="btn roberto-btn w-100">
            Reserve
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SingleStudioSideFilter);
