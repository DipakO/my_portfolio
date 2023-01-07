/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Dipak.</span>
        <div className="links">
          <a href="https://www.facebook.com/dipak.ohol.560" target="_blank" rel = "noreferrer noopener">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          
          <a href="https://github.com/DipakO/" target="_blank" rel = "noreferrer noopener">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Dipak
        </p>
      </div>
    </footer>
  );
}

export default Footer;
