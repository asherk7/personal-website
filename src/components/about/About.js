import React from 'react'
import me from '../../resources/me.jpg'
import './about.css'

const About = () => {
  return (
    <section id="about" className="container">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="asher">
          <img src={me} alt="Asher Khan" />
        </div>
        <div className="aboutme">
          <h2>McMaster '26 - B.Eng - Software Engineer</h2>
          <h4>I am a student at McMaster University, class of 2026. I am passionate about the field of software engineering, particularly in the areas of full-stack development, devops, software design, machine learning, and data science.</h4>
          <h4>As an aspiring software engineer, I constantly seek to enhance my skills and knowledge in order to create innovative and efficient solutions. I find immense satisfaction in working with both front-end and back-end technologies, crafting seamless user experiences while ensuring robust functionality behind the scenes.</h4>
          <h4>As a dedicated learner, I am constantly seeking opportunities to expand my skill set and deepen my understanding of software engineering. I derive great satisfaction from crafting seamless user experiences while ensuring the robustness and efficiency of the underlying code. </h4>
        </div>
      </div>
    </section>
  )
}

export default About