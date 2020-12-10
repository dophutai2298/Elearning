import React, { Component } from "react";
import { connect } from "react-redux";
import { searchCourse } from "../../Redux/Action/user";
class Search extends Component {
  handleSearch = (evt) => {
    console.log();
    this.props.searchCourse(evt.target.value);
  };
  render() {
    return (
      <div className="list__search">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            onChange={this.handleSearch}
            placeholder="Search..."
          />
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchCourse: (keyword) => dispatch(searchCourse(keyword)),
  };
};
export default connect(null, mapDispatchToProps)(Search);
