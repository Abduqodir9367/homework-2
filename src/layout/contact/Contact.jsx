import React from "react";
import "./Contact.scss";
import call from "../../assets/images/call.png";
const Contact = () => {
  return (
    <section className="Contact">
      <div className="container">
        <div className="contact">
          <div className="left">
            <h1>Contact Us</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="btns">
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
            <p className="line"></p>
            <h2>Not convinced yet?</h2>
            <p className="p2">
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <button className="contact-btn">Browse our packages</button>
          </div>
          <div className="right">
            <form>
              <div className="inpt">
                <label htmlFor="text">Full name</label>
                <input type="text" name="text " />
              </div>
              <div className="inpt">
                <label htmlFor="text">Phone number</label>
                <input type="text" name="text " />
              </div>
              <div className="inpt">
                <label htmlFor="text">Address</label>
                <input type="text" name="text " />
              </div>
              <div className="inpt">
                <label htmlFor="text">Email</label>
                <input type="text" name="text " />
              </div>
              <div className="inpt">
                <label htmlFor="text">Requested service</label>
                <input type="text" name="text " />
              </div>
              <div className="inpt">
                <label htmlFor="text">Day of service</label>
                <input type="text" name="text " />
              </div>

              <div className="inpt">
                <textarea></textarea>
              </div>
              <button className="submit">
              Submit message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
