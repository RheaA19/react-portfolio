import React from "react";
import ProjectCard from "../components/ProjectCard";

const Finals = () => {
  const projects = [
    
  ];

  return (
    <div className="section">
      <h2>Finals Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Finals;
