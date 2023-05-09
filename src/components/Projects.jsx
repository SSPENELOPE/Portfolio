import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
    return (
        <div className="projectWrapper">

                <div className="container">
                    <a href="https://starweather.azurewebsites.net/" target="_blank" rel="noreferrer" className="work-box beard">
                        <h3>React/C#/ASP.NET</h3>
                        <a href="https://github.com/SSPENELOPE/react-weatherapp" target="_blank" rel="noreferrer" className="abc"><FontAwesomeIcon icon={faGithub} /></a>
                    </a>

                    <a href="https://pawsnclaws-petcare.herokuapp.com/" target="_blank" rel="noreferrer" className="work-box mern">
                        <h3>MERN STACK</h3>
                        <a href="https://github.com/SSPENELOPE/paws-n-claws" target="_blank" rel="noreferrer" className="abc"><FontAwesomeIcon icon={faGithub} /></a>
                    </a>


                    <a href="https://github.com/SSPENELOPE/ecommerce-backend" target="_blank" rel="noreferrer" className="work-box weather">
                        <h3>MySQL/Sequelize</h3>
                        <a href="https://github.com/SSPENELOPE/ecommerce-backend" target="_blank" rel="noreferrer" className="abc"><FontAwesomeIcon icon={faGithub} /></a>
                    </a>
 
                    <a href="https://sspenelope.github.io/Work-Day-Planner/" target="_blank" rel="noreferrer" className="work-box workday">
                        <h3>Jquery/Moment</h3>
                        <a href="https://github.com/SSPENELOPE/Work-Day-Planner" target="_blank" rel="noreferrer" className="abc"><FontAwesomeIcon icon={faGithub} /></a>
                    </a>

                    <a href="https://github.com/SSPENELOPE/Network-API" target="_blank" rel="noreferrer" className="work-box mongo">
                        <h3>MongoDB Backend</h3>
                        <FontAwesomeIcon className="abc" icon={faGithub} />
                    </a>
                </div>
        </div>
    )
}

export default Projects;