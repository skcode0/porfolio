import React from 'react';
import Typewriter from 'typewriter-effect';
import { StyledIntro } from './Intro.style';
import Resume from '../img/Sangcheol_Kim_Resume.pdf';

function Intro() {
    return (
        <StyledIntro id="home">
            <div className="intro">
                {`Hello, World! I am a `}	
                <div className="type-writer">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('front-end developer.')
                            .pauseFor(2000)
                            .deleteAll(150)
                            .typeString('self-taught programmer.')
                            .pauseFor(2000)
                            .deleteAll(150)
                            .start()
                        }}

                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <a href="#about"><button className="about-me-btn">About Me</button></a>
                <a href={Resume} target="_blank" rel="noreferrer"><button className="resume-btn">Resume</button></a>
            </div>
        </StyledIntro>
    )
}

export default Intro
