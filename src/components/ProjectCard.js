import React, { useState } from "react";

const ProjectCard = ({ title, description, image }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card" onClick={() => setOpen(true)}>
        <img src={image} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <img src={image} alt={title} className="modal-img" />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
