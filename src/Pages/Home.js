import profile from "../assets/profile.png";

function Home() {
  return (
    <div className="page home">
      {/* Profile picture first */}
      <img
        src={profile}
        alt="My profile"
        className="profile-pic"
      />

      <h1>Welcome to My Portfolio</h1>
      <p>Select Prelim, Midterm, or Finals to view my work.</p>
    </div>
  );
}

export default Home;
