import React from "react";
import "./Contact_Card.css";

const Contact_Card = ({ img, url, name }) => {
  return (
    <div className="contact_card">
      <a href={url}  target="_blank" rel="noopener noreferrer">
        <img src={img} width={"30%"} alt="linkedin" />
      </a>
      <a className="social_name" href={url}  target="_blank" rel="noopener noreferrer">
        <h1>{name}</h1>
      </a>
    </div>
  );
};

export default Contact_Card;
