import React from 'react';
import Typewriter from 'typewriter-effect';
import { StyledIntro } from './Intro.style';


function Intro() {
    return (
        <StyledIntro id="home">
            <p className="intro">
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

                <button className="about-me-btn"><a href="#about">About Me</a></button>
                <button className="resume-btn">Resume</button>

            </p>
        </StyledIntro>
    )
}

export default Intro
