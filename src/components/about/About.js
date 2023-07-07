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
          <h4> I am a student at McMaster University, class of 2026. I am passionate about the field of software engineering, particularly in the areas of machine learning, math, statistics, software design, AI, and data science.</h4>
          <h4>I'm captivated by the possibilities of machine learning and its ability to make intelligent decisions. I enjoy exploring algorithms and techniques that power machine learning models to solve real-world problems.</h4>
          <h4>Currently, I'm focused on learning more about machine learning. I stay updated with the latest developments and undertake practical projects to expand my expertise in this rapidly evolving field.</h4>
        </div>
      </div>
    </section>
  )
}

export default About