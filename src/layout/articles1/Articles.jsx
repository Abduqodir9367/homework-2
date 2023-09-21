import React from "react";
import "./Articles.scss";
import article1 from "../../assets/images/article1.png";
import article2 from "../../assets/images/article2.png";

const Articles = () => {
  return (
    <section className="Article">
      <div className="container">
        <div className="par">
          <h1>Articles & resources</h1>
          <div className="par-buttons">
            <button>Get a free quote</button>
            <button>Browse articles</button>
          </div>
        </div>
        <div className="articles">
          <div className="article">
            <img src={article1} alt="img" />
            <div className="box">
              <h2>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h2>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="article-footer">
                <h3>Jan 28, 2022</h3>
                <p>.</p>
              </div>
            </div>
          </div>
          <div className="article">
            <img src={article2} alt="img" />
            <div className="box">
              <h2>
              How to properly disinfect your phone and other electronics
              </h2>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="article-footer">
                <h3>Feb 1, 2022</h3>
                <p>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
