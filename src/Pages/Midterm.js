import React from "react";
import ProjectCard from "../components/ProjectCard";

// Existing midterm images
import midtermquiz from "../assets/midtermquiz.jpeg";
import midtermexam from "../assets/midtermexam.jpeg";

// Dynamically import 12 e-commerce PNG images (s1–s12)
const ecommerceImages = Array.from({ length: 12 }, (_, i) =>
  require(`../assets/s${i + 1}.png`)
);

// Convert ecommerce images into ProjectCard objects
const ecommerceProjects = ecommerceImages.map((img, index) => ({
  title: `E-commerce Slide ${index + 1}`,
  description: `Midterm E-commerce project slide ${index + 1}`,
  image: img,
}));

const Midterm = () => {
  // Combine original projects + ecommerce slides
  const projects = [
    { title: "Midterm Quiz", description: "Midterm quiz coverage", image: midtermquiz },
    { title: "Midterm Exam", description: "Midterm written examination", image: midtermexam },
    ...ecommerceProjects,
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
