import React from 'react';
import Project from './Project.js';
import nfl from '../../resources/projects/nfl.jpg';
import island from '../../resources/projects/island.jpg';
import jaguars from '../../resources/projects/jaguars.jpg';
import workout from '../../resources/projects/workout.jpg';
import ml from '../../resources/projects/machine_learning.png';
import "./projects.css"

const Projects = () => {
    const data = [
        {
            id: 1,
            image: ml,
            title: "EthniVision",
            tech: ["Tensorflow", "Sci-kit Learn", "React", "Node.js"],
            github: "https://github.com/asherk7/EthniVision",
            demo: ""
        },
        {
            id: 2,
            image: nfl,
            title: "NFL Record Predictor",
            tech: ["Python", "Flask", "sci-kit learn", "pandas"],
            github: "https://github.com/asherk7/NFL-Record-Predictor",
            demo: "https://nflrecordpredictor.pythonanywhere.com/"
        },
        {
            id: 3,
            image: island,
            title: "Island Generator",
            tech: ["Java", "Maven", "JUnit"],
            github: "https://github.com/asherk7/Island-Generator",
            demo: ""
        },
        {
            id: 4,
            image: jaguars,
            title: "Jaguars Webpage",
            tech: ["HTML", "CSS", "Flexbox"],
            github: "https://github.com/asherk7/jaguars-webpage",
            demo: "https://asherk7.github.io/jaguars-webpage/"
        },
        {
            id: 5,
            image: workout,
            title: "Workout Tracker",
            tech: ["TypeScript", "Python", "Django", "Angular", "Jenkins"],
            github: "https://github.com/asherk7/Workout-Tracker",
            demo: ""
        }
    ]

    return (
        <section id="projects">
            <h1>Projects</h1>
            <h2>My Recent Work, More to Come</h2>
            <div className="container projects-container">
                {data.map((project) => {
                    return (
                        <Project data={project} />
                    )
                })}
            </div>
        </section>
    );
}

export default Projects