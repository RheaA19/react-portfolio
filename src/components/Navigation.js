import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/prelim">Prelim</Link></li>
        <li><Link to="/midterm">Midterm</Link></li>
        <li><Link to="/finals">Finals</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
