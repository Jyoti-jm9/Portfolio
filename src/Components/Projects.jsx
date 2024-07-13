import React from 'react';
import projects from './projects.json';
import Project from './Project';
import './projectStyles.css';

const Projects = () => {
  return (
    <>
    <h1 className='text-4xl font-bold text-center'>PROJECTS</h1>
    <div className="projects-container">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
    </>
  );
};

export default Projects;