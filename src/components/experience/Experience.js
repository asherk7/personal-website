import React from 'react'
import Ericsson from '../../resources/ericsson.png'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
        <h1>Experience</h1>
        <h2>My Journey So Far</h2>
        <div className="timeline container">
            <div className="work-inverted">
                <div className="timeline-image"></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h2>More to Come...</h2>
                    </div>
                    <div className="timeline-body">
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="work">
                <div className="timeline-image">
                    <a href="https://www.ericsson.com/en">
                        <img className="image" src={Ericsson} alt="Ericsson Logo" />
                    </a>
                </div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h2>5G Software Developer Co-op</h2>
                        <h4>September 2023 - Present</h4>
                        <h4>Ericsson</h4>
                    </div>
                    <div className="timeline-body">
                        <p>I am currently working at Ericsson as a 5G Software Developer Co-op</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience