import React from 'react';
import { StyledNav } from './Nav.style';

function Nav() {
    return (
        <StyledNav>
            <div className="logo">
                <a href="#home">Sangcheol Kim</a>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </StyledNav>
    )
}

export default Nav
