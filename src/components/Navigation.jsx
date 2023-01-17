import React, { useState } from "react";
import {Link, Navigate } from "react-router-dom";


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
                        <Link to="/" className="nav-link link mx-2" style={{ border: "none" }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/appointment" className="nav-link link mx-2">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pricing" className="nav-link link mx-2" href="#">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link link mx-2" tabIndex="-1">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;