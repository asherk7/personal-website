import React from 'react'
import './projects.css'

const Project = (props) => {
  let projectdata = props.data

  return (
    <article key={projectdata.id} className="project">
      <div className="project-image">
        <img src={projectdata.image} alt={projectdata.title} />
      </div>
      <h3>{projectdata.title}</h3>
      <div className="project-tech">
        {projectdata.tech.map((tech) => {
          return <li key={tech}>{tech}</li>
        })}
      </div>
      <a href={projectdata.github} target="_blank" rel="noopener noreferrer" className="btn">Github</a>
      {projectdata.demo !== "" ? 
      <a href={projectdata.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
      : ""}
    </article>
  )
}

export default Project