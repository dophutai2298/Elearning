import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__list">
          <div className="row">
            <div className="col-sm-2">
              <div className="footer__list--item">
                <a href>Udemy for Business</a>
                <a href>Teach on Udemy</a>
                <a href>Get the app</a>
                <a href>About us</a>
                <a href>Contact us</a>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="footer__list--item">
                <a href>Careers</a>
                <a href>Blog</a>
                <a href>Help and Support</a>
                <a href>Affiliate</a>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer__list--item">
                <a href>Terms</a>
                <a href>Privacy policy and cookie policy</a>
                <a href>Sitemap</a>
                <a href>Featured courses</a>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="footer__list--item">
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/lophocviet"
                  data-tabs="timeline"
                  data-height="300"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/lophocviet"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/lophocviet">
                      CyberSoft - Đào Tạo Lập Trình Theo Lộ Trình Dự án
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__logo">
            <a href>
              <img src="./images/logo-coral.svg" alt />
            </a>
            <span>© 2020 Udemy, Inc.</span>
          </div>
        </div>
      </footer>
    );
  }
}
