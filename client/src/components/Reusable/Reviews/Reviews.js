import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchStudioReviews} from "../../../actions";
import {handleRating} from "../../Reusable/Helpers/Helper"





class  Reviews extends Component {
constructor(props){
  super(props);

  this.state ={
    reviewState: [],
  }
}

  componentDidMount() {
    this.props.fetchStudioReviews(this.props.param);
  }



  handleTimeStamp =(time)=>{
  function padDate (dateVal)  {
    if(dateVal < 10){
      return `0${dateVal}`
    }
    return `${dateVal}`
   } 

    return `${padDate(time.getDay())}/${padDate(time.getMonth()+1)}/${time.getFullYear()}`;
    }

  render(){
    if(!this.props.reviews){
      return "Loading..."
    }
    let {
      reviews,
    } = this.props;
    let {reviewState} = this.state;
  return (
    <div className="room-review-area mb-100">
      <h4>Reviews</h4>

      <div className="single-room-review-area col-md-6">
      
{ reviews.length < 1 || Object.values(reviews[0]).length < 1  ? <p>No Reviews At this time</p> :
      reviews.map(r=>{
   return (
   <div>
    <div className="reviwer-thumbnail">
   { <img src={r.image} alt="" />} 
  </div>

  <div className="reviwer-content">
    <div className="reviwer-title-rating d-flex align-items-center justify-content-between">
      <div className="reviwer-title">
<span>{this.handleTimeStamp(new Date(r.time_stamp))}</span> 
<h6>{r.username}</h6>
      </div>
      <div className="reviwer-rating">
        {handleRating(r.rating)} 
        
      </div>
    </div>
    <p>
     {r.review}
    </p>
  </div>
  </div>)
      })
      }
      </div>
      </div>
  )
    }
};

function mapStateToProps({ reviews }) {
  return { reviews };
}

export default connect(mapStateToProps, {
  fetchStudioReviews
})(Reviews);


