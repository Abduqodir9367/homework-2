import React from "react";
import "./Service.scss";
import image1 from "../../assets/images/service1.png";
import image2 from "../../assets/images/service2.png";
import image3 from "../../assets/images/service3.png";

const Service = () => {
  return (
    <section className="Service">
      <div className="container">
        <div className="par">
          <h1>Our Services</h1>
          <button className="par-btn">Explore services</button>
        </div>
        <div className="carts">
          <div className="cart">
            <img src={image1} alt="img" />
            <h3>House cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="cart cart2">
            <img src={image2} alt="img" />
            <h3>Office cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="cart">
            <img src={image3} alt="img" />
            <h3>Industrial cleaning</h3>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
