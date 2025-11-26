import React from "react";
import ProjectCard from "../components/ProjectCard";

import prelimlab1 from "../assets/prelimlab1.jpeg";
import prelimlab2 from "../assets/prelimlab2.jpeg";
import prelimlab3 from "../assets/prelimlab3.jpeg";
import prelimquiz1 from "../assets/prelimquiz1.jpeg";
import prelimquiz2 from "../assets/prelimquiz2.jpeg";
import prelimlabexam from "../assets/prelimlabexam.jpeg";
import prelimexam from "../assets/prelimexam.jpeg";

const Prelim = () => {
  const projects = [
    { title: "Prelim Lab 1", description: "Laboratory activity 1", image: prelimlab1 },
    { title: "Prelim Lab 2", description: "Laboratory activity 2", image: prelimlab2 },
    { title: "Prelim Lab 3", description: "Laboratory activity 3", image: prelimlab3 },
    { title: "Prelim Quiz 1", description: "Quiz on prelim lessons", image: prelimquiz1 },
    { title: "Prelim Quiz 2", description: "Second prelim quiz", image: prelimquiz2 },
    { title: "Prelim Lab Exam", description: "Prelim laboratory examination", image: prelimlabexam },
    { title: "Prelim Exam", description: "Prelim written examination", image: prelimexam }
  ];

  return (
    <div className="section">
      <h2>Prelim Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Prelim;
