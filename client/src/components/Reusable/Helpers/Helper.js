import React from "react";




//function converts standard time to military time and calculates time difference
export function handleHoursMin(starttime, endtime, justStart=false, justEnd=false) {
  let start = starttime.split(":");
  let end = endtime.split(":");

  if(!start[1] || !end[1]){
  return;
}
  if (
    start[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "pm" && start[0] < 12
  ) {
    start[0] = Number(start[0]) + 12;
    starttime = start.join(":");
    
  }

  if (
    end[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "pm" && end[0] < 12
  ) {
    end[0] = Number(end[0]) + 12;
    endtime = end.join(":");
  
  }

  if (
    start[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "am" &&
    Number(start[0]) === 12
  ) {
    start[0] = Number(start[0]) - 12;
    starttime = start.join(":");
   
  }

  if (
    end[1]
      .slice(-2)
      .replace(" ", "")
      .toLowerCase() === "am" &&
    Number(end[0]) === 12
  ) {
    end[0] = Number(end[0]) - 12;
    endtime = end.join(":");
  
  }

  starttime = starttime.slice(starttime, -2).replace(" ", "");
  endtime = endtime.slice(endtime, -2).replace(" ", "");

  if(justStart){
    
    return starttime;
}

  let splitStart = starttime.split(":");
  let splitEnd = endtime.split(":");
  let minInHours = (splitEnd[0] - splitStart[0]) * 60;
  let startMin = isNaN(splitStart[1]) ? splitStart[1][1] : splitStart[1];
  let endMin = isNaN(splitEnd[1]) ? splitEnd[1][1] : splitEnd[1];
  let totalMin =
    (Number(minInHours) + (Number(endMin) - Number(startMin))) / 60;
  return totalMin;
}

//function to parse query parameters
//Adds all values to an array for consistent access
export function handleQueryString(query){
  query = query.replace(/%20/g, " ")
    let queryObj = {}
   query = query.split("?").map(q=>{
     let arr = q.split("=")
      if(queryObj[arr[0]]){
        queryObj[arr[0]] = queryObj[arr[0]].concat(arr[1])
      }
      else{
        queryObj[arr[0]] = [].concat(arr[1])
      }
      
   });
   

    return queryObj;
  };

//Function converts timestamps to date time format
  export function handleTimeStamp(time, std=1){
    if(std=1){
    return time.getDay()+'/'+time.getMonth()+'/'+time.getYear();
    }
    }

//Function to show ratings
export function handleRating(val=0){
  let arr = []
for(let i =0; i< 5; i++){
  if(val > 0){
    arr.push(<i style={{color:"gold"}} className="fa fa-star"></i>)
    val = val-1
  }
  else{
arr.push(<i className="fa fa-star"></i>)
  }
}
return arr.map(star=>star);
}