import React from 'react';
import githubIcon from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import emailIcon from '../img/email.svg';
import { StyledContact } from './Contact.style';
import { StyledTitle } from './Skills.style';

function Contacts() {
    return (
        <StyledContact className="div-width" id="contacts">
            <StyledTitle data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                <h1>Contacts</h1>
                <div className="hr-line"></div>
            </StyledTitle>

            <div className="contact-icons" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                <a href="https://github.com/skcode0" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Github icon"/>
                    <p>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/sangcheol-kim-365a29128/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn icon"/>
                    <p>LinkedIn</p>
                </a>
                <a href="mailto: sangcheolkim@utexas.edu" target="_blank" rel="noreferrer">
                    <img src={emailIcon} alt="email icon"/>
                    <p>Email</p>
                </a>
            </div>
        </StyledContact>
    )
}

export default Contacts
