import React from "react";
import "./Education.css";
import Card from "./Card/Card";
const Education = () => {
  const education = [
    {
      course: "Class 12(Commerce with Maths)",
      school: "Govt.Boys Sr.Sec.School, Delhi",
      year: "2008 - 2020",
    },
    {
      course: "B.COM [Hons]",
      school: "Zakir Hussain Delhi College, University of Delhi",
      year: "2020 - 2023",
    },
    {
      course: "Full-Stack Web Development",
      school: "Udemy, Online",
      year: "June 2023 - Jan 2024",
    },
    {
      course: "MERN Stack Training",
      school: "NullClass, Online",
      year: "Nov 2023 - Jan 2024",
    }
  ];
  return (
    <section id="education">
      <div className="education_title">
        <h1 className="about_title_text">My Education</h1>
      </div>

      <div className="education_stages">
        {education.map((stag, i) => (
          <Card
            key={i}
            course={stag.course}
            school={stag.school}
            year={stag.year}
          />
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Education;
