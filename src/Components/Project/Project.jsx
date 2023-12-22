import React, { useEffect } from "react";
import "./Project.css";
import Project_Card from "./Card/Project_Card";
import proj1 from "../../assets/proj1.png";
const Project = () => {
  useEffect(() => {
    // Scroll to the projects section when the component mounts
    window.scrollTo({
      top: document.getElementById("project").offsetHeight + 950,
      behavior: "smooth",
    });
  }, []);
  const Projects = [
    {
      img: proj1,
      heading: "REVV.COM",
      para: "A rental car web application provides varieties of cars on rent.",
      features: [
        "Wishlist feature",
        "Provided filters for user convenience",
        "User interactive interface",
      ],
      stacks: "HTML CSS JavaScript NodeJS",
    },
    {
      img: proj1,
      heading: "UBUY.COM",
      para: "An e-commerce web application for buying products via online.",
      features: [
        " Product discovery page",
        "Easy navigation and design",
        "Plenty of varieties and choices",
      ],
      stacks: "HTML CSS JavaScript",
    },
    {
      img: proj1,
      heading: "ZOMATO",
      para: "A clone of India's largest Food Delivery, Dining and Restaurant Discovery Service. Better food for more people.",
      features: [
        " Home Page contains Collection Page",
        "Random Recipes filters",
        "Filtered food items data and Restaurant data",
      ],
      stacks: "ReactJS HTML CSS MongoDB Express NodeJS Advance JS",
    },
  ];
  return (
    <section id="project">
      <div className="project_title">
        <h1 className="project_title_text">My Project</h1>
      </div>
      <div className="projects">
        {Projects.map((project, i) => {
          return (
            <Project_Card
              key={i}
              img={project.img}
              heading={project.heading}
              para={project.para}
              features={project.features}
              stacks={project.stacks}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
