import React from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="content">
        <span className="hello">Hello,</span>
        <span className="intro_text">
          I'm <span className="intro_name">V.Kartik</span> <br />
          MERN Stack Developer
        </span>
        <p className="para">
          I am a skilled Web Developer with experience in creating <br /> visual
          appealing & user-friendly websites using MERN Stack..
        </p>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="btn">
            <img className="btn_img" src={btnImg} alt="HireMe" />
            Hire Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
