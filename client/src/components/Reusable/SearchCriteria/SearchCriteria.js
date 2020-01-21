import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudioType } from "../../../actions";

class SearchCriteria extends Component {
  componentDidMount() {
    this.props.fetchStudioType();
  }

  render() {
    if (!this.props.studiotype) {
      return "Loading";
    }

    let { col, title, name, studiotype, search="", label="Studio Types", required=false} = this.props;
    return (
      <div className={`${col}`}>
        <label htmlFor={label}>Studio Types</label>
        <select name={name} id={title} className="form-control" required={required}>
          <option value="">All</option>
          {studiotype.map(m => {
            let option = (
              <option key={m._id} value={m._id}>
                {m.studio_type}
              </option>
            );
            if (m._id == search) {
             
              option = (
                <option key={m._id} selected value={m._id}>
                  {m.studio_type}
                </option>
              );
            }
            return option;
          })}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ studiotype }) {
  return { studiotype };
}

export default connect(mapStateToProps, { fetchStudioType })(SearchCriteria);
