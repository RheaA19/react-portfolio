import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // icons

function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "SQL"];

  return (
    <div className="page home">
      {/* Profile Picture */}
      <img src={profile} alt="My profile" className="profile-pic" />

      {/* Welcome */}
      <h1>Welcome to My Portfolio</h1>

      {/* Intro */}
      <p className="intro">
        This website showcases 
        my skills, projects, and personal information.
      </p>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Personal Info */}
      <div className="personal-info">
        <h2>Contact Me</h2>
        <p><FaEnvelope /> rheamolod474@example.com</p>
        <p><FaPhone /> +63 9695141123</p>
        <p><FaMapMarkerAlt /> Philippines</p>
      </div>

      {/* Navigation Buttons */}
      <div className="page-buttons">
        <Link to="/prelim" className="btn">Prelim</Link>
        <Link to="/midterm" className="btn">Midterm</Link>
        <Link to="/finals" className="btn">Finals</Link>
      </div>
    </div>
  );
}

export default Home;
