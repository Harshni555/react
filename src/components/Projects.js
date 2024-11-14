import React from 'react';
import { projects } from "../data/data"; 

function Projects() {
    return (
        <section className='projects__container' id='projects'>
            <h2 className='projects__title'>Projects</h2>
            <div className='projects'>
                {projects.map((project, id) => {
                    return <div className='project-container' key={id}>
                        <img src={project.imageSrc} className='project-img' alt='' />
                        <h3 className='project-title'>{project.title}</h3>
                        <p className='project-description'>{project.description}</p>
                        <div className='project-links'>
                            <a href={project.source} className='project-link'>
                            Source
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
};

export default Projects;