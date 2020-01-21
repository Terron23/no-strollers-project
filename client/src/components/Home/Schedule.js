import React, { Component } from "react";
import StudioHuntDatePicker from "../Reusable/DatePicker/StudioHuntDatePicker";
import "../Reusable/DatePicker/css/datepick.css";
import SearchCriteria from "../Reusable/SearchCriteria/SearchCriteria";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      search: "",
      startDate: new Date(),
      reveal: false,
    };
  }

  handleChangeStart = date => {
    document.getElementById("schedule-check").focus();
    this.setState({
      startDate: date, reveal:false
    });
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
    let search = e.target.studio.value === "" ? "All" : e.target.studio.value;
    let location =
      e.target.location.value === "" ? "All" : e.target.location.value;
    let startDate = e.target.checkinDate.value;
    this.props.history.push({
      pathname:
        "/search-studio/" +
        search +
        "/" +
        location +
        "/" +
        startDate.replace(/[/]/g, "-")
      // search: '?startday='+startDate
    });
  };

  render() {
    let { locate } = this.props;
    let { startDate , reveal} = this.state;
    return (
      <section className="roberto-about-area section-padding-100-0">
        <div className="hotel-search-form-area">
          <div className="container-fluid">
            <div className="hotel-search-form">
              <form onSubmit={this.handleSubmit}>
                <div className="row justify-content-between align-items-end">
                  <div className="col-6 col-md-2 col-lg-3">
                    <label htmlFor="checkIn">Location</label>
                    <input
                      type="search"
                      className="form-control"
                      id="location"
                      name="location"
                      defaultValue={locate}
                    />
                  </div>
                  <div className="col-6 col-md-2 col-lg-3">
                    <label htmlFor="checkIn">Check In</label>

                    <StudioHuntDatePicker
                      type="text"
                      value={startDate.toString().substring(0, 15)}
                      classNames="input-small form-control startDate"
                      id="schedule-check"
                      name="checkinDate"
                      placeholder="Choose Date"
                      autoComplete="off"
                      selectRange={false}
                      handleChangeStart={this.handleChangeStart}
                      calendarClass={"startDate"}
                      handleReveal={this.handleReveal}
                      revealCal={reveal}
                      move={true}
                    />
                  </div>

                  <SearchCriteria title="studio" col="col-6 col-md-2 col-lg-3"/>

                  <div className="col-8 col-md-3">
                    <button
                      type="submit"
                      className="form-control btn roberto-btn w-100"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Schedule;
