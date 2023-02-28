import React, { useState } from "react";
import {Link} from "react-router-dom";
import Resume from "../resume/Tyler.Resume.pdf"


function Navigation() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);


    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar navbar-expand-lg navbar-light customNav ">
            <button className="navbar-toggler customBtn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-2">
                <h3 className="display-6 link bg-dark p-2"><strong>TP.</strong></h3>
            </div>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse nav-section navsec mx-2`} id="navbarNav">
                <ul className="navbar-nav h4 mx-2">
                    <li className="nav-item active">
                        <a href="./#home" className="nav-link link mx-2" style={{ border: "none" }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="./#aboutMe" className="nav-link link mx-2">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="./#projects" className="nav-link link mx-2">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="./#contactMe" className="nav-link link mx-2" tabIndex="-1">Contact Me</a>
                    </li>
                    <li className="nav-item">
                        <a href={Resume} target="_blank" rel="noreferrer" className="nav-link link mx-2">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;