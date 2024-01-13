import React, { useEffect } from "react";
import "./Project.css";
import Project_Card from "./Card/Project_Card";
import { Projects } from "../../assets/Data/Projects.js";

const Project = () => {
  useEffect(() => {
    // Scroll to the projects section when the component mounts
    window.scrollTo({
      top: document.getElementById("project").offsetHeight + 950,
      behavior: "smooth",
    });
  }, []);

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
              deploy={project.deploy}
              code={project.code}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Project;
