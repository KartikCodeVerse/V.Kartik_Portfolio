import React from "react";
import "../Education/Education.css";
import Card from "../Education/Card/Card";
import "./Experience.css"
const Experience = () => {
  const education = [
    {
      position: "MERN Stack Developer Intern",
      company: "NullClass",
      duration: "Nov 2023 - March 2024",
    },
  ];
  return (
    <section id="experience">
      <div className="education_title">
        <h1 className="about_title_text">My Experience</h1>
      </div>

      <div className="education_stages">
        {education.map((stag, i) => (
          <Card
            key={i}
            course={stag.position}
            school={stag.company}
            year={stag.duration}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
