import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Gaming</span>News
              </h3>
              <p>
                Level up your gaming experience with us! Stay updated on the
                latest news, reviews, and tips. Connect with fellow gamers now.
              </p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/News">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/tech">
                    Technologie
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/About">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>My Infos</h5>
              <p>
                <i className="fa-solid fa-phone-volume"></i> +216 20835573
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> yassinezehani@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-paper-plane"></i> Tunisia , Manouba.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Design By Yassine Zehani</p>
      </div>
    </>
  );
};

export default Footer;
