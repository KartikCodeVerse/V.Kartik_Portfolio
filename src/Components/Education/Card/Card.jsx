import React from "react";
import "./Card.css";
const Card = ({ course, school, year }) => {
  return (
    <div className="card">
      <h2 className="course_name">{course}</h2>
      <h3 className="school_name">{school}</h3>
      <p className="pass_year">{year}</p>
    </div>
  );
};

export default Card;
