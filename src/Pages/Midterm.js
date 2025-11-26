import React from "react";
import ProjectCard from "../components/ProjectCard";

import midtermquiz from "../assets/midtermquiz.jpeg";
import midtermexam from "../assets/midtermexam.jpeg";

const Midterm = () => {
  const projects = [
    { title: "Midterm Quiz", description: "Midterm quiz coverage", image: midtermquiz },
    { title: "Midterm Exam", description: "Midterm written examination", image: midtermexam }
  ];

  return (
    <div className="section">
      <h2>Midterm Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Midterm;
