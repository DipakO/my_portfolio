/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dipak from "./../assets/dipak.png";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img style={{ marginBottom: "50px" }} src={dipak} alt="dipak" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Dipak Ohol</h6>
            <h3>Full Stack Developer ,</h3>
            <h3>Web Developer</h3>
            <p>
              Hello... I am Mern FullStack Developer . I have deeply study of
              the React , Node , Express , mongoDB . and also knowledge od about
              the Redux and I know about the Python Automation and Machine
              Learning.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
