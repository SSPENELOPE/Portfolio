import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
    return (
        <div className="socialLinks">
            <div className="text-light">
                <h2 className="my-4"><a className="socialLink" href="https://github.com/SSPENELOPE" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a></h2>
                <h3 className="my-4 mx-2"><a className="socialLink" href="https://www.linkedin.com/in/tyler-poepping-3931b123b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></h3>
            </div>
        </div>
    )
}

export default SocialLinks;