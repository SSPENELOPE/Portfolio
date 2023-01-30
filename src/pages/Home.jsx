import React from "react";
import Navigation from "../components/Navigation";
import Aboutme from "../components/Aboutme";
import SocialLinks from "../components/SocialLinks";
import Projects from "../components/Projects";
import Conatct from "../components/Conatact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const intro = "{{ Full-Stack Web Developer }}";
    const introStyle = {
        color: 'white',
        textShadow: '1px 1px 1px purple',
    }
    return (
        <div className="homeSection">
            <Navigation />
            <SocialLinks />
            <div className="homePage ">
                <h1 className="mx-3 display-4 intro" style={introStyle}><strong>{intro}</strong></h1>
            </div>
            <div className="section-1 mx-4">
                <div className="hello">
                    <h1 className="text-light wheat">Hello, My Name is Tyler Poepping</h1>
                </div>
                <div className="mx-5 icon">
                    <FontAwesomeIcon className="text-light" icon={faHandPeace} size='4x'/>
                </div>
                
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="dfc557bd-8f31-4ae7-95f2-2e0116d4fb69" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                
            </div>

            <h3 className="text-light margin mx-5">About me</h3>

            <div className="aboutMe">
                <Aboutme />
            </div>

            <h3 className="text-light mx-5 margin2">Projects</h3>

            <div className="projects">
                <Projects />
            </div>

            <h3 className="text-light mx-5 margin">Contact Me</h3>

            <div className="contact">
                <Conatct />
            </div>

        </div>
    )
}

export default Home;