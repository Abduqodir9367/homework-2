import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-items">
            <div className="home">
              <h2>Quality cleaning for your home</h2>
              <p>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </p>
              <div className="number">
                <p className="num"></p>
                <p className="num"></p>
                <p className="num"></p>
                <p className="num"></p>
                <p className="num"></p>
              </div>
            </div>
            <div className="contact">
              <h5>Contact us</h5>
              <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
              <p>(414) 567 - 2109</p>
              <p>contact@cleaning.com</p>
            </div>
            <div className="hours">
              <h2>Hours</h2>
              <h3>Monday to Friday</h3>
              <p className="p3">6:00 AM - 9:00 PM</p>
              <h3>Saturday & Sunday</h3>
              <p>8:00 AM - 8:00 PM</p>
            </div>
            <div className="estimate">
              <h4>Get a free estimate</h4>
              <h1>(414) 567 - 2109</h1>
              <p>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <button className="footer-btn">Request a free quote</button>
            </div>
          </div>
          <div className="last-footer">
            <a href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <div className="footer-links">
              <p>Copyright © Cleaning X | Designed by</p>
              <a href="#">BRIX Templates</a>
              <p>- Powered by</p>
              <a href="#">Webflow - Licenses</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
