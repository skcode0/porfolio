import React, { useEffect, useRef } from 'react';
import { StyledAbout, StyledAboutTitle } from './About.style';
import circularText from '../img/circularText.svg';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

function About() {
    const pRef = useRef(null);

    // options for vanilla tilt
    const options = {
        reverse: true,
        "full-page-listening": true,
        max: 30
    }

    useEffect(() =>{
        VanillaTilt.init(pRef.current, options);
    }, []);

    return (
        <StyledAbout className="div-width" id="about">
            <div className="about-me">
                <StyledAboutTitle data-aos="fade-up">
                    <h1>About Me</h1>
                    <div className="hr-line"></div>
                </StyledAboutTitle>
                <p data-aos="fade-up">I am a highly motivated web developer who is always willing to learn. I started learning about web developement out of curiosity, but now, I found my love for coding and web designing. My goal is to give web users the best experience they can get on a website! </p>
            </div>

            <div className="circular-text" data-aos="fade-up">
                <motion.img src={circularText} alt="Circular Text"
                    animate={{ rotate: 360 }}
                    transition={
                        { 
                            repeat: Infinity, 
                            duration: 15, 
                            type: "tween",
                            repeatDelay: 0,
                            ease: "linear"
                        }
                    }
                />
                <p ref={pRef}>SK</p>
            </div>
        </StyledAbout>
    )
}

export default About
