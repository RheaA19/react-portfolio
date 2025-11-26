import React from "react";
import profilePic from "../assets/profile.png";

export default function About() {
  return (
    <div className="section about-section">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="about-text">
          <p>
            Hello! I’m RHEA A. MOLOD, a passionate developer learning React and building
            interactive web applications. I enjoy turning ideas into functional projects
            and continuously improving my skills in web development.
          </p>
          <p>
            This portfolio showcases my Prelim, Midterm, and Finals projects, along
            with my skills and personal information.
          </p>
        </div>
      </div>
    </div>
  );
}
