import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudio, fetchStudioType } from "../../../actions";
import StudioSearchTemplate from "./sub_components/StudioSearchTemplate";
import StudioSearchHeader from "./sub_components/StudioSearchHeader";
import StudioSideFilter from "./sub_components/StudioSideFilter";
import StudioMobileFilter from "./sub_components/StudioMobileFilter";
import Loading from "../../Reusable/Loading/Loading";
import Infinite from "../../Reusable/InfiniteScroll/Infinite";
import { Row } from "react-bootstrap";
import "./css/studio.css";

class StudioSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStudioType: "All",
      filterGuest: 0,
      zip: null,
      miles: "",
      time: "",
      day: "",
      availibility: [],
      guest: "",
      state: "",
      location:
        this.props.match.params.location === "All"
          ? ""
          : this.props.match.params.location || "",
      reveal: false,
      filterArr: "",
      longLat: [],
      studioType:
        this.props.match.params.search === "All"
          ? ""
          : this.props.match.params.search || "",
      guest: 0,
      startDate: !this.props.match.params.startdate
        ? ""
        : this.props.match.params.startdate || "",
      applyDate: "",
      startTime: "",
      setShow: false,
      search: [],
      items: Array.from({ length: 2 }),
      hasMore: true,
      counter: 0
    };
  }

  componentDidMount() {
    this.props.fetchStudio(
      0,
      2,
      this.handleParam(this.state.studioType, "", this.state.location)
    );
    let search = this.featureType()
this.setState({search})

  }

  featureType = () => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let error = "";
    let arr = [];
    let search = this.props.studio;
    let filterArr = search
      .filter(studio =>
        this.state.location === ""
          ? studio.state
          : studio.state
              .toLowerCase()
              .match(this.state.location.toLowerCase()) ||
            studio.postal_code.toLowerCase() ===
              this.state.location.toLowerCase()
      )
      .filter(studio =>
        this.state.studioType === ""
          ? studio.studio_type_fk
          : studio.studio_type_fk === Number(this.state.studioType)
      )
      .filter(studio =>
        this.state.startDate === ""
          ? Object.values(studio.availibility)
          : Object.values(studio.availibility).filter(
              day =>
                day.toLowerCase() ===
                days[new Date(this.state.startDate).getDay()].toLowerCase()
            ) != ""
      )
      .map(studio => {
        arr.push(
          <StudioSearchTemplate
            key={studio._id}
            studioImage={Object.values(studio.studio_images)[0]}
            studioName={studio.studio_name}
            price={studio.studio_price}
            _id={studio._id}
            studioType={studio.studio_type}
            city={studio.city}
            availibility={Object.values(studio.availibility)}
            dateQuery={this.state.startDate}
            venue={studio.studio_venue}
          />
        );
      });

   
      let arrMain = this.state.search
      return  [...new Set(arrMain.concat(arr))]
     ;
    
  };

  handleParam = (studiotype, date, state) => {
    if (isNaN(studiotype)) {
      studiotype = "";
    }
    return `&studioType=${studiotype}&location=''&state=${state}`;
  };

  handleAvailibility = async e => {
    e.preventDefault();
    let location = e.target.location.value;
    let studioType = e.target.studioType.value;
    let startDate = e.target.startDate.value;
    const getData = await this.props.fetchStudio(
      0,
      2,
      this.handleParam(studioType, startDate, location)
    );
    this.setState({ location, studioType, startDate,
      items:Array.from({ length: 2 }), counter:0 , search:[], hasMore: true});

     
   this.featureType()
 
    this.handleClose(e);
  };

  handlePrice = () => {
    let filterArr = [...this.props.studio];
    let price = filterArr
      .map(studio => {
        return studio.price;
      })
      .sort();

    return price;
  };

  handleClose = e => {
    e.preventDefault();
    this.setState({ setShow: false });
  };

  handleShow = e => {
    e.preventDefault();
    if (!this.state.setShow) {
      this.setState({ setShow: true });
    } else {
      this.setState({ setShow: false });
    }
  };

  handleReveal = () => {
    if (this.state.reveal) {
      this.setState({ reveal: false });
    } else {
      this.setState({ reveal: true });
    }
  };

  handleChangeStart = date => {
    document.getElementById("search-id").focus();
    this.setState({
      startDate: date,
      reveal: false
    });
  };

  clearCal = () => {
    this.setState({
      startDate: "",
      reveal: false
    });
  };

  fetchMoreData = async () => {
    if (this.state.items.length >= 6) {
      this.setState({ hasMore: false });
    }
    else{
    let { studioType, location, startDate, search } = this.state;
    let counter = this.state.counter + 2;
    this.setState({ counter, search: this.featureType() });
    const getData = await this.props.fetchStudio(
      counter,
      2,
      this.handleParam(studioType, startDate, location)
    );
    
      this.featureType()
     
    this.setState({
      items: this.state.items.concat(Array.from({ length: 2 }))
    });
  }
  };

  render() {
    if (!this.props.studio) {
      return <Loading />;
    }
    let {
      location,
      startDate,
      studioType,
      setShow,
      reveal,
      search,
      items,
      hasMore
    } = this.state;

    return (
      <section>
        <div className="mobile-search">
          <hr />
          <StudioMobileFilter
            handleShow={this.handleShow}
            handleClose={this.handleClose}
            setShow={setShow}
          >
            <StudioSideFilter
              location={location}
              submit={this.handleAvailibility}
              priceLow={this.handlePrice()[0]}
              priceHigh={this.handlePrice().pop()}
              search={studioType}
              stateText={startDate}
              handleChangeStartProps={this.handleChangeStart}
              handleRevealProp={this.handleReveal}
              revealCal={reveal}
              clearCal={this.clearCal}
            />
          </StudioMobileFilter>
        </div>
        <div className="roberto-rooms-area section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className={`col-12 col-lg-8`}>
               
              <Infinite
                  fetchMoreData={this.fetchMoreData}
                  hasMore={this.state.hasMore}
                  items={this.state.items}
                >
                  {this.state.items.map((i, index) => this.featureType()[index])}
                </Infinite> 
              </div>
              {document.documentElement.clientWidth >= 1000 ? (
                <StudioSideFilter
                  location={location}
                  submit={this.handleAvailibility}
                  priceLow={this.handlePrice()[0]}
                  priceHigh={this.handlePrice().pop()}
                  search={studioType}
                  stateText={startDate}
                  startDate={startDate}
                  handleChangeStartProps={this.handleChangeStart}
                  handleRevealProp={this.handleReveal}
                  revealCal={reveal}
                  hide="web-search"
                  clearCal={this.clearCal}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ locate, studio, type }) {
  return { studio, type };
}

export default connect(mapStateToProps, {
  fetchStudio,
  fetchStudioType
})(StudioSearch);
