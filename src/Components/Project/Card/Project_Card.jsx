import React from "react";
import "./Project_Card.css";

const Project_Card = ({ img, heading, para, features, stacks }) => {
  return (
    <div className="proj_card">
      <div className="proj_left">
        <img src={img} alt="" />
      </div>
      <div className="proj_right">
        <div className="proj_title">
          <h1 className="proj_heading">{heading}</h1>
          <p className="para1">{para}</p>
        </div>
        <div className="des">
          <h3 className="head">Features:</h3>
          {features.map((feature, i) => {
            return (
              <li className="para" key={i}>
                {feature}
              </li>
            );
          })}
        </div>
        <div className="stack">
          <h3 className="head">Tech Stack:</h3>
          <p className="para">{stacks}</p>
        </div>
        <div className="btns">
          <button className="btn proj_btn">Deploy</button>
          <button className="btn proj_btn">Code</button>
        </div>
      </div>
    </div>
  );
};

export default Project_Card;
