import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Course extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="col-sm-3 my-2">
        <div className="card">
          <h4 className="card-title">{item.tenKhoaHoc}</h4>
          <img
            className="card-img-top"
            style={{ height: "200px" }}
            src={item.hinhAnh}
            alt="Course IMG"
          />
          <div className="card-body">
            <div className="card__value">
              <div className="card__value--star">
                <span>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__value--price">
                <p>{item.ngayTao}</p>
              </div>
            </div>
            <a href="./detail.html">
              <div className="card__button">
                <NavLink exact to={`/detail/${this.props.item.maKhoaHoc}`}>
                  <button className="btnView">View More</button>
                </NavLink>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
