import React from "react";
import "./Service2.scss";
import call from "../../assets/images/call.png"
import image from "../../assets/images/Service-img1.png"

const Service2 = () => {
  return (
    <section className="Service2">
      <div className="container">
        <div className="big">
          <div className="left">
            <img src={image} alt="" />
          </div>
          <div className="right">
            <h3>Covid-19 sanitization</h3>
            <h1>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h1>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
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
        </div>
        <div className="line">.</div>
      </div>
    </section>
  );
};

export default Service2;
