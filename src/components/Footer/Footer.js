import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h1>Get to know us</h1>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press releases</li>
          </ul>
        </div>
        <div className="footer__right">
          <h1>Connect with us</h1>
          <ul>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
