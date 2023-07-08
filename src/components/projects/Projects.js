import React from 'react'
import nfl from '../../resources/projects/nfl.jpg'
import island from '../../resources/projects/island.jpg'
import jaguars from '../../resources/projects/jaguars.jpg'
import workout from '../../resources/projects/workout.jpg'
import tbd from '../../resources/programming.png'
import './projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <h2>My Recent Work, More to Come</h2>

      <div className="container projects-container">
        <article className="project">
          <div className="project-image">
            <img src={nfl} alt="NFL Record Predictor" />
          </div>
          <h3>NFL Record Predictor</h3>
          <a href="https://github.com/asherk7/NFL-Record-Predictor" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
          <a href="https://nflrecordpredictor.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
        </article>

        <article className="project">
          <div className="project-image">
            <img src={island} alt="Island Generator" />
          </div>
          <h3>Island Generator</h3>
          <a href="https://github.com/asherk7/Island-Generator" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
        </article>

        <article className="project">
          <div className="project-image">
            <img src={jaguars} alt="Jaguars Webpage" />
          </div>
          <h3>Jaguars Webpage</h3>
          <a href="https://github.com/asherk7/jaguars-webpage" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
          <a href="https://asherk7.github.io/jaguars-webpage/m" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
        </article>

        <article className="project">
          <div className="project-image">
            <img src={workout} alt="Workout Tracker" />
          </div>
          <h3>Workout Tracker</h3>
          <a href="https://github.com/asherk7/Workout-Tracker" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
        </article>

        <article className="project">
          <div className="project-image">
            <img src={tbd} alt="To Be Decided" />
          </div>
          <h3>Final Project for Odin Project, Coming Soon</h3>
          <a href="https://github.com/asherk7" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
        </article>

        <article className="project">
          <div className="project-image">
            <img src={tbd} alt="To Be Decided" />
          </div>
          <h3>Full-Stack Machine Learning Project, Coming Soon</h3>
          <a href="https://github.com/asherk7" target="_blank" rel="noopener noreferrer" className="btn">Github</a>
        </article>
      </div>
    </section>
  )
}

export default Projects