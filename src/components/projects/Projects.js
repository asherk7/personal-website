import React from 'react';
import Project from './Project.js';
import nfl from '../../resources/projects/nfl.jpg';
import island from '../../resources/projects/island.jpg';
import jaguars from '../../resources/projects/jaguars.jpg';
import workout from '../../resources/projects/workout.jpg';
import tbd from '../../resources/programming.png';
import "./projects.css"

const Projects = () => {
    const data = [
        {
            id: 1,
            image: nfl,
            title: "NFL Record Predictor",
            tech: ["Python", "Flask", "sci-kit learn", "pandas"],
            github: "https://github.com/asherk7/NFL-Record-Predictor",
            demo: "https://nflrecordpredictor.pythonanywhere.com/"
        },
        {
            id: 2,
            image: island,
            title: "Island Generator",
            tech: ["Java", "Maven", "JUnit"],
            github: "https://github.com/asherk7/Island-Generator",
            demo: ""
        },
        {
            id: 3,
            image: jaguars,
            title: "Jaguars Webpage",
            tech: ["HTML", "CSS", "Flexbox"],
            github: "https://github.com/asherk7/jaguars-webpage",
            demo: "https://asherk7.github.io/jaguars-webpage/"
        },
        {
            id: 4,
            image: workout,
            title: "Workout Tracker",
            tech: ["TypeScript", "Python", "Django", "Angular", "Jenkins"],
            github: "https://github.com/asherk7/Workout-Tracker",
            demo: ""
        },
        {
            id: 5,
            image: tbd,
            title: "Full-Stack Machine Learning Project, Coming Soon",
            tech: ["Node.js", "React", "TensorFlow"],
            github: "https://github.com/asherk7",
            demo: "https://github.com/asherk7"
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