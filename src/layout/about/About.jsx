import React from "react";
import "./About.scss";
import img1 from "../../assets/images/about1.png"
import img2 from "../../assets/images/about2.png"
import img3 from "../../assets/images/about3.png"

const About = () => {
  return (
    <div className="about">
      <section className="second">
        <div className="container">
          <div className="par">
            <h1>About Us</h1>
            <p>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>
          <div className="cards">
            <div className="card">
                <img src={img1} alt="img" />
                <h3>1. Schedule online</h3>
                <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div className="card">
                <img src={img2} alt="img" />
                <h3>2. Pay online easily</h3>
                <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
            </div>
            <div className="card">
                <img src={img3} alt="img" />
                <h3>3. Get your house cleaned</h3>
                <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
            </div>
          </div>
          <div className="buttons">
            <button className="btn1">Get a free quote</button>
            <button className="btn2">Explore services</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
