import React, { useState } from 'react';
import { StyledNav, StyledMobileNav } from './Nav.style';
import { motion } from 'framer-motion';
import Menu from '../img/hamburger_menu.svg';
import MobileNav from './MobileNav';

const listVariants = {
    hover:{
        scale: 1.1,
        transition:{
            type: "spring",
            stiffness: 120
        }
    }
}

function Nav() {
    const [ modalOpen, setModalOpen ] = useState(false);

    function openModal(){
        setModalOpen(true);
    }

    return (
        <StyledNav>
            <div className="logo">
                <a href="#home">Sangcheol Kim</a>
            </div>
            <ul className="destop-ul">
                <motion.li
                    variants={listVariants}
                    whileHover="hover"
                ><a href="#home">Home</a></motion.li>
                <motion.li
                    variants={listVariants}
                    whileHover="hover"
                ><a href="#about">About Me</a></motion.li>
                <motion.li
                    variants={listVariants}
                    whileHover="hover"
                ><a href="#skills">Skills</a></motion.li>
                <motion.li
                    variants={listVariants}
                    whileHover="hover"
                ><a href="#projects">Projects</a></motion.li>
                <motion.li
                    variants={listVariants}
                    whileHover="hover"
                ><a href="#contacts">Contacts</a></motion.li>
            </ul>

            <StyledMobileNav>
                <img src={Menu} alt="hamburger menu" onClick={openModal}></img>

                {
                    modalOpen && <MobileNav setModalOpen={setModalOpen}/>
                }
            </StyledMobileNav>
        </StyledNav>
    )
}

export default Nav
