import React, { Component } from "react";
import SearchCriteria from "../../../Reusable/SearchCriteria/SearchCriteria";
import FormAttr from "./FormAttr";
import StudioHuntDatePicker from '../../../Reusable/DatePicker/StudioHuntDatePicker'

class StudioSideFilter extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let {
      submit,
      location,
      search,
      hide,
      revealCal,
      stateText,
      handleChangeStartProps,
      handleRevealProp,
      clearCal
    } = this.props;
  
    return (
      <div className={`col-12 col-lg-4 ${hide}`}>
        <div className={`hotel-reservation--area mb-100`}>
          <form onSubmit={submit}>
            <FormAttr label="Location">
              <input
                type="search"
                defaultValue={location}
                className="input-small form-control"
                id="location"
                name="location"
                placeholder="City or Zip"
                autoComplete="off"
                
              />
            </FormAttr>

            <FormAttr>
              <SearchCriteria
                title="Studio Type"
                search={search}
                name="studioType"
                col="col-12"
              />
            </FormAttr>
            <FormAttr label="Check In Date">

            <StudioHuntDatePicker 
              type="text"
              classNames="input-small form-control startDate"
              id="search-id"
              name="startDate"
              placeholder="All Available Dates"
              autoComplete="off"
            stateText={stateText}
          selectRange={false} 
          revealProps={revealCal}
          calendarClass={"startDate"} 
          handleRevealProp={handleRevealProp}
          handleChangeStartProps={handleChangeStartProps}
          clearCal={clearCal}
              />
        
         
            </FormAttr>

            <div className="form-group mb-30">
              <div className="row no-gutters"></div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn roberto-btn w-100">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StudioSideFilter;
