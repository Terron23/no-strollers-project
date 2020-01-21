import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchUser } from "../../../actions";
import Title from "../../assets/Title";
import TimeDropDown from "../../assets/TimeDropDown";
import './css/style.css'

class Availibility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: "d-none",
      timeSlot: [],
      dateArr: [], 
      days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

 

  handleDates = e => {
let timeSlot=[];
let days = this.state.days;
  for(let i=0; i< 7; i++){
    timeSlot.push(
   
      <div className="col-md-3 col-lg-3" key={i} style={{"border": "#0e2737 solid 1px"}}>
       
       <TimeDropDown id={`${days[i]}_starttime`} 
       name={`${days[i]}_starttime`} 
       label={<b style={{"color":"#34CACA"}}>{days[i]} - Start Time </b>} 
       classProp="form-style-1 time_slot" required={true}/>

        <TimeDropDown id={`${days[i]}_endtime`}
         name={`${days[i]}_endtime`} 
         label={<b style={{"color":"#34CACA"}}>{days[i]} - End Time </b>} 
         classProp="form-style-1 time_slot"  required={true}/>
        </div>
       )
  }
return timeSlot;

  };


  handleSubmit = event => {
   
    event.preventDefault();
    let studioname = this.props.match.params.studioName;
    let studioid = this.props.match.params.id;
    let schedule = this.state.dateArr;
    let {days} = this.state
    let day;
    let starttime;
    let endtime;

   for(let i = 0; i<7; i++){
     starttime= document.getElementById(`${days[i]}_starttime`).value || '';
     endtime=document.getElementById(`${days[i]}_endtime`).value || '';
     day = days[i]
     if(starttime !== '' && endtime !== ''){
     schedule.push({ starttime, endtime, day });
     }
   }
  

    axios
      .post("/api/post-listing-time", { schedule, studioname, studioid })
      .then(res => {
        this.props.history.push(`/details/${studioname}/${studioid}`);
      });
  };

  render() {
    if (!this.props.auth) {
      return "";
    }

    return (
      <div className="container" >
        <Title header="Hours of Availibility"  />
  <div className="row">
        
      {this.handleDates()}
      </div>
  <div className="form-group row" style={{"padding":"20px"}}>
                <button className="btn roberto-btn w-100" onClick={this.handleSubmit}>
                  Save & Continue
                </button>
              </div>
      </div>
    );
  }
}

function mapStateToProps({ studio, auth }) {
  return { studio, auth };
}

export default connect(mapStateToProps, { fetchUser })(Availibility);
