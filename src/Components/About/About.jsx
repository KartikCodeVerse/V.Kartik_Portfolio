import React from "react";
import "./About.css";
import kartikImage from "./pic/IMG20230702192216.jpg";
const About = () => {
  return (
    <section id="about">
      <div className="about_title">
        <h1 className="about_title_text">About Me</h1>
      </div>

      <div className="about_div">
        <div className="left-img">
          <div className="img-card">
            <img src={kartikImage} alt="Kartik" />
          </div>
        </div>
        <div className="right-content">
          <h2 className="content-title">Hey There! I'm Kartik</h2>
          <p className="content-text">
            A creative and diligent aspiring full-stack developer with a
            specialization in MERN stack. Self-believing and enthusiastic, with
            a keen interest in building and designing frontend. Looking forward
            to sharpening my skills in a challenging environment. I guarantee
            enthusiasm in work and fulfilling my projects with inexpressible
            efforts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
