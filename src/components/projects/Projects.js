import React from 'react'
import NFL from '../../resources/projects/NFL.jpg'
import island from '../../resources/projects/island.jpg'
import jaguars from '../../resources/projects/jaguars.jpg'
import './projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <h5>My Recent Work, More to Come</h5>

      <div className="container projects-container">
        <article className="project">
          <div className="project-image"></div>
          <h3>NFL Record Predictor</h3>
          <a href="https://github.com/asherk7/NFL-Record-Predictor" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
          <a href="https://nflrecordpredictor.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
        </article>
      </div>

      <div className="container projects-container">
        <article className="project">
          <div className="project-image"></div>
          <h3>Island Generator</h3>
          <a href="https://github.com/asherk7/Island-Generator" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
        </article>
      </div>

      <div className="container projects-container">
        <article className="project">
          <div className="project-image"></div>
          <h3>Jaguars Webpage</h3>
          <a href="https://github.com/asherk7/jaguars-webpage" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
          <a href="https://asherk7.github.io/jaguars-webpage/m" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Projects