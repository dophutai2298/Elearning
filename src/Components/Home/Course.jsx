import React, { Component } from "react";

export default class Course extends Component {
  render() {
    return (
      <div className="card">
        <img src="./images/kh6.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">
            Boostrap 4 From Scartch With 5 Projects
          </h4>
          <p className="card-text">Joinas Schemedtman</p>
          <div className="rating">
            <div className="rating_star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span>4.8</span>
            <span> (42152)</span>
          </div>
        </div>
        <div className="price">
          <span className="new-price">$89.99</span>
          <span className="old-price">$189.99</span>
          <button className="btn_sell">Bestseller</button>
        </div>
      </div>
    );
  }
}
