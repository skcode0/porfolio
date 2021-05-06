import React from 'react';
import { StyledAbout, StyledAboutTitle } from './About.style';

function About() {
    return (
        <StyledAbout className="div-width" id="about">
            <div className="about-me">
                <StyledAboutTitle data-aos="fade-up">
                    <h1>About Me</h1>
                    <div className="hr-line"></div>
                </StyledAboutTitle>
                {/* //! finish about section */}
                <p data-aos="fade-up">I am a highly motivated web developer who is always willing to learn. I started learning about web developement out of curiosity, but now, I found my love for coding and web designing. My goal is to give web users the best experience they can get on a website! </p>
            </div>

            {/* //! add something */}

        </StyledAbout>
    )
}

export default About
