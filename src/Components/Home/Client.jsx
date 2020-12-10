import React, { Component } from "react";

export default class Client extends Component {
  render() {
    return (
      <section className="client__section">
        <div className="client__section--content">
          <div className="client__content--detail">
            <h3>Trusted by companies of all sizes</h3>
            <a href>
              <img src="./images/booking.svg" alt />
              <img src="./images/volkswagen.svg" alt />
              <img src="./images/mercedes.svg" alt />
              <img src="./images/adidas.svg" alt />
              <img src="./images/pinterest.svg" alt />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
