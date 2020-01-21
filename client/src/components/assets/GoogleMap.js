// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper,  InfoWindow, Marker } from 'google-maps-react';
// import axios from'axios'
// import {connect} from 'react-redux';
// import {fetchLocation, fetchStudio} from '../../actions';
// const styles = {
//   width: '100%',
//   height: '100%',
//   float: 'right'
// };

// export class MapContainer extends Component {
//  constructor(props){
//    super(props);
//    this.state = {
//     showingInfoWindow: false,  //Hides or the shows the infoWindow
//     activeMarker: {},          //Shows the active marker upon click
//     selectedPlace: {},
//     longLat: [{lat: this.props.locate.latitude, lng:  this.props.locate.longitude , studioName: "You"}],         //Shows the infoWindow to the selected place upon a marker
//   };
//  }

// //  componentDidMount(){
// //   var longLat =[... this.state.longLat]
// //   this.props.fetchLocation()
// //   this.props.fetchStudio()
// //   this.props.studio.map(studio=>{
// //     return axios.post('https://maps.googleapis.com/maps/api/geocode/json?address='+studio.address1+',+'+studio.city+',+'+studio.region+'&key=AIzaSyCvUna-ZY2L065FZg9zRXsMWgVE8s9lHvw')
// //     .then(res=>{
// //       console.log("Response", res.data.results);
// //     let studios = studio.studioName
// //     let obj =
// //     //longLat.push({lng:res.data.results["0"].geometry.location.lng, lat:res.data.results["0"].geometry.location.lat, studioName: studios})
// //     this.setState({longLat})
// //     console.log("longlat", this.state.longLat);
// //     })
// //       })

// //  }

//  onMarkerClick = (props, marker, e) =>
//  this.setState({
//    selectedPlace: props,
//    activeMarker: marker,
//    showingInfoWindow: true
//  });

// onClose = props => {
//  if (this.state.showingInfoWindow) {
//    this.setState({
//      showingInfoWindow: false,
//      activeMarker: null
//    });
//  }
// };

//   render() {

//     return (

//         <Map
//         google={this.props.google}
//         zoom={10}
//         style={styles}
//         visible={true}
//         initialCenter={{lat: this.props.locate.latitude, lng:  this.props.locate.longitude }}
//         >

// {this.state.longLat.map(marker=><Marker
//         onClick={this.onMarkerClick}
//                 name={marker.studioName}
//                 position={{lat: marker.lat, lng:marker.lng }}
//                  />)

// }

//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </Map>

//     );
//   }
// }

// function mapStateToProps({locate, studio}) {
//   return { locate , studio};
// }

// export default connect(mapStateToProps, {  fetchLocation, fetchStudio })(GoogleApiWrapper({
//   apiKey: 'AIzaSyCvUna-ZY2L065FZg9zRXsMWgVE8s9lHvw'
// })(MapContainer));
