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
    return time.getDay()+'/'+time.getMonth()+'/'+time.getYear();
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

      <div className="single-room-review-area d-flex align-items-center">
      
{ reviews.length < 1 || Object.values(reviews[0]).length < 1  ? <h4>No Reviews At this time</h4> :
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


