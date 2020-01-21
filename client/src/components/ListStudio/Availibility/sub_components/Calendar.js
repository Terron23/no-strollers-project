import React, { Component } from "react";
import WeekCalendar from 'react-week-calendar';
import moment from 'moment'
import 'react-week-calendar/dist/style.css';
import PropTypes from 'prop-types';

const propTypes = {
  date: PropTypes.object.isRequired,
  dayFormat: PropTypes.string.isRequired,
};


class Header extends React.PureComponent {
  
  render() {
    const {
      date,
      dayFormat,
    } = this.props;
    console.log(date, dayFormat, date.format("dd.")) 
    return (<span   className="title">{date.format("dddd")}</span>);
  }
}

Header.propTypes = propTypes;



class MyCalendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastUid: 1,
      selectedIntervals: []
    }
  }

  handleEventRemove = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals.splice(index, 1);
      this.setState({selectedIntervals});
    }

  }

  handleEventUpdate = (event) => {
    const {selectedIntervals} = this.state;
    const index = selectedIntervals.findIndex((interval) => interval.uid === event.uid);
    if (index > -1) {
      selectedIntervals[index] = event;
      this.setState({selectedIntervals});
    }
  }

  handleSelect = (newIntervals) => {
    const {lastUid, selectedIntervals} = this.state;
    const intervals = newIntervals.map( (interval, index) => {

      return {
        ...interval,
        uid: lastUid + index
      }
    });

    this.setState({
      selectedIntervals: selectedIntervals.concat(intervals),
      lastUid: lastUid + newIntervals.length
    })
  }

  render() {
    return <WeekCalendar
      startTime = {moment({h: 0, m: 0})}
      endTime = {moment({h: 23, m: 59})}
      scaleUnit ={60}
      scaleHeaderTitle="Time"
      scaleFormat="HH:mm"
      cellHeight = {25}
      numberOfDays= {7}
      selectedIntervals = {this.state.selectedIntervals}
      onIntervalSelect = {this.handleSelect}
      onIntervalUpdate = {this.handleEventUpdate}
      onIntervalRemove = {this.handleEventRemove}
      headerCellComponent={Header}
      style={{"width":"100vw"}}
    />
  }
}

export default MyCalendar;