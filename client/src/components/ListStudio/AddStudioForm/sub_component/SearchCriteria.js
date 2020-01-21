import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudioType } from "../../../../actions";

class SearchCriteria extends Component {
  componentDidMount() {
    this.props.fetchStudioType();
  }

  render() {
    if (!this.props.studiotype) {
      return "Loading";
    }

    let { col, title, name, studiotype, search } = this.props;
    console.log(search);
    return (
      <div className={`col-${col}`}>
        <label htmlFor={title}>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </label>
        <select name={name} id={title} className="form-control">
          <option value="">All</option>
          {studiotype.map(m => {
            let option = (
              <option key={m._id} value={m.studioType}>
                {m.studioType}
              </option>
            );
            if (m._id === search) {
              option = (
                <option key={m._id} selected value={m.studioType}>
                  {m.studioType}
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
