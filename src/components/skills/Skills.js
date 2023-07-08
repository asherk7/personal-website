import React from 'react'
import programming from '../../resources/programming.png'
import ML from '../../resources/ML.png'
import DB from '../../resources/DB.png'
import webdev from '../../resources/webdev.png'
import Frameworks from '../../resources/Frameworks.png'
import devops from '../../resources/devops.png'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h1>Technical Skills</h1>
      <div className="container column">
        <div className="skill-container">
          <img src={programming} alt="Programming" />
          <h2>Programming Languages</h2>
          <hr></hr>
          <p>
            Python / JavaScript / Java / C / Bash / MATLAB / R / SQL
          </p>
        </div>

        <div className="skill-container">
          <img src={ML} alt="Machine Learning" />
          <h2>Machine Learning</h2>
          <hr></hr>
          <p>
            TensorFlow / PyTorch / Keras / SciPy / SciKit-Learn / NumPy / Pandas / Matplotlib / Seaborn
          </p>
        </div>

        <div className="skill-container">
          <img src={DB} alt="Databases" />
          <h2>Data Bases</h2>
          <hr></hr>
          <p>
            MySQL / MongoDB / SQLite
          </p>
        </div>

        <div className="skill-container">
          <img src={webdev} alt="Web Development" />
          <h2>Web Development</h2>
          <hr></hr>
          <p>
            HTML / CSS / TypeScript / React / Node.js / Express
          </p>
        </div>

        <div className="skill-container">
          <img src={Frameworks} alt="Frameworks" />
          <h2>Frameworks</h2>
          <hr></hr>
          <p>
            Bootstrap / Django / Flask / Angular / Tableau
          </p>
        </div>

        <div className="skill-container">
          <img src={devops} alt="DevOps" />
          <h2>DevOps</h2>
          <hr></hr>
          <p>
            Git / JUnit / Jira / Docker / Jenkins / AWS / SonarQube / Maven
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills