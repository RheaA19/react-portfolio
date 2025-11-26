import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C++",
    "C#",
    "MySQL",
    "Git & GitHub",
    "TensorFlow (ML Projects)"
  ];

  return (
    <div className="section skills-section">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
}
