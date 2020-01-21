import React, { Component } from "react";
import Calendar from "react-calendar";
import "./css/datepick.css";
import { Overlay, Popover } from "react-bootstrap";

class StudioHuntDatePicker extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      reveal: false,
      startDate: ""
    };
  }

  handleReveal = () => {
    if (this.state.reveal) {
      this.setState({ reveal: false });
    } else {
      this.setState({ reveal: true });
    }
  };

  clearCal = e => {
    e.preventDefault();
    this.setState({
      startDate: "",
      reveal: false
    });
  };

  handleChangeStart = date => {
    let id = this.props.id;
    document.getElementById(`${id}`).focus();
    this.setState({
      startDate: date,
      reveal: false
    });
  };

  render() {
    let {
      type,
      classNames,
      id,
      name,
      placeholder,
      autoComplete,
      selectRange,
      required = false,
      stateText,
      handleChangeStartProps,
      revealProps,
      handleRevealProp,
      viewAll = true,
      clearCal = this.clearCal
    } = this.props;
    let { reveal, startDate } = this.state;
console.log(clearCal)
    return (
      <div className="studiohunt-datepicker-tag">
        <input
          type={type}
          value={
            stateText
              ? stateText.toString().substring(0, 15)
              : startDate.toString().substring(0, 15)
          }
          className={`${classNames}`}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onClick={handleRevealProp ? handleRevealProp : this.handleReveal}
          required={required}
          ref={this.ref}
        />

        <Overlay
          show={revealProps ? revealProps : reveal}
          target={this.ref.current}
          rootClose={true}
          placement="bottom"
          onHide={handleRevealProp ? handleRevealProp : this.handleReveal}
        >
          <Popover id="popCal">
            <Calendar
              selectRange={selectRange}
              minDate={new Date()}
              defaultView="month"
              showNeighboringMonth={false}
              onChange={
                handleChangeStartProps
                  ? handleChangeStartProps
                  : this.handleChangeStart
              }
            />
            {viewAll ? (
              <button
                onClick={clearCal}  
                className="btn btn-block roberto-btn"
              >
                View All
              </button>
            ) : (
              ""
            )}
          </Popover>
        </Overlay>
      </div>
    );
  }
}

export default StudioHuntDatePicker;
