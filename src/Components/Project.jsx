import React from 'react';
import PropTypes from 'prop-types';
import './projectStyles.css';

const Project = ({ project }) => {
  return (
    <div className="project">
      <img src={project.imageSrc} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
