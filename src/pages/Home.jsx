import React from "react";
import Navigation from "../components/Navigation";
import Aboutme from "../components/Aboutme";
import SocialLinks from "../components/SocialLinks";

function Home() {
    const intro = "{{ Full-Stack Web Developer }}";
    return (
        <div className="homeSection">
            <Navigation />
            <SocialLinks />
            <div className="homePage">
                <h1 className="text-light display-1 mx-3"><strong>{intro}</strong></h1>
            </div>
            <div className="section-1 mx-4">
                <h1 className="text-light">Hello, My Name is Tyler Poepping</h1>
            </div>

            <Aboutme />

        </div>
    )
}

export default Home;