import { useState, useEffect } from 'react';

import Project from './Project';
import '../../css/Projects.css';
import projectsData from '../../data/projects.json'


const Projects = () => {

    const [data, setData] = useState(null)
     
    useEffect(() => {
        setData(projectsData)
        document.title = "Ben Jon | Work"

    }, [])  
    
    return(
        <div className="projects">
            <div className="container">
                <div className="projects-work">
                    {
                        data ? data.map((project, index) => {
                            return  <Project 
                                        key={index} 
                                        name={project.name}
                                        description={project.description}
                                        image={project.image}
                                        skillsUsed={project.skillsUsed}                         
                                    />
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;