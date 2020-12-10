import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <section className="container">
        <div className=" gallery__section">
          <div className="gallery__section--title">
            <h3>Top categories</h3>
          </div>
          <div className="row gallery__section--list">
            <div className="col-sm-3 ">
      
              <div className="gallery__section--item">
   
                <a href ="">
                  <div className="gallery__item--img">
                    <img src="./images/galleryMb.jpg" alt />
                  </div>
                  <div className="gallery__item--name">
                    <p>Mobile Development</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="gallery__section--item">
                <a href ="#">
                  <div className="gallery__item--img">
                    <img src="./images/galleryFE.jpg" alt />
                  </div>
                  <div className="gallery__item--name">
                    <p>Front End Development</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="gallery__section--item">
                <a href ="#">
                  <div className="gallery__item--img">
                    <img src="./images/galleryBE.png" alt />
                  </div>
                  <div className="gallery__item--name">
                    <p>Back End Development</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-3 ">
        
              <div className="gallery__section--item">
             
                <a href ="#">
                  <div className="gallery__item--img">
                    <img src="./images/galleryFStack.jpg" alt />
                  </div>
                  <div className="gallery__item--name">
                    <p>FullStack Development</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row gallery__list-btn">
            <div className="gallery__btn-item">
              <a className="btn-field" href>
               Mobile Development
              </a>
            </div>
            <div className="gallery__btn-item">
              <a className="btn-field" href>
               Front End Development
              </a>
            </div>
            <div className="gallery__btn-item">
              <a className="btn-field" href>
              Back End Development
              </a>
            </div>
            <div className="gallery__btn-item">
              <a className="btn-field" href>
               FullStack Development
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
