import React from "react";
import "./Skills.css";
import { Link } from "react-scroll";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill_title">
        <h1 className="skill_title_text">My Skills</h1>
      </div>
      <div className="skill_des">
        <div className="left">
          <h1 className="left_title">My Skills and Experiences</h1>
          <p className="left_content">
            I develop web applications using languages and frameworks like
            JavaScript, Nodejs, Express, MongoDB, Reactsjs, HTML, CSS.
            <br />
            <br />I am always excited by new technologies, therefore, I do not
            hesitate to take up coding task.
          </p>
          <Link
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="btn see_more">See More</button>
          </Link>
        </div>
        <div className="right">
          <img
            className="skill_icons"
            src="https://cdn.svgporn.com/logos/html-5.svg"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://cdn.svgporn.com/logos/css-3.svg"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://cdn.svgporn.com/logos/bootstrap.svg"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://cdn.svgporn.com/logos/javascript.svg"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://cdn.svgporn.com/logos/nodejs.svg"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://www.mementotech.in/assets/images/icons/express.png"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://www.bing.com/th?q=MongoDB+Icon&w=100&h=100&c=7&o=5&dpr=1.5&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate"
            alt=""
          />
          <img
            className="skill_icons"
            src="https://cdn.svgporn.com/logos/react.svg"
            alt=""
          />
          <img className="skill_icons" src="" alt="" />
          <img className="skill_icons" src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
