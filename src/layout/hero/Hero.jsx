import React from "react";
import "./Hero.scss";
import img1 from "../../assets/images/hero-img.png"
import call from "../../assets/images/call.png"

const Hero = () => {
  return (
    <div className="hero1">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="left">
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="btns">
                <button className="btn1">Get a free quote</button>
                <div className="calls">
                  <a href="#">
                    <img src={call} alt="icon" />
                  </a>
                  <div className="call">
                    <p className="num">Call us now</p>
                    <h3>(414) 567 - 2109</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
