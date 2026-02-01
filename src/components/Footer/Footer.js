import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-name">Where Entertainment Meets Innovation</p>
      <p className="footer-contact">
        <a target="_blank" rel="noreferrer" href="#">
          <box-icon
            color="white"
            size="md"
            type="logo"
            name="github"
          ></box-icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <box-icon
            color="#0abde3"
            size="md"
            type="logo"
            name="facebook-circle"
          ></box-icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="#"
        >
          <box-icon
            color="#ee5253"
            size="md"
            name="youtube"
            type="logo"
          ></box-icon>
        </a>
      </p>
    </div>
  );
}

export default Footer;
