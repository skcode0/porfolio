import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { StyledUl } from './MobileNav.style';
import { useInView } from 'react-intersection-observer';


const listVariants = {
    hover:{
        scale: 1.1,
        transition:{
            type: "spring",
            stiffness: 120
        }
    }
}

function MobileNav(props) {
    const { setModalOpen } = props;

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    function closeModal(e){
        setModalOpen(false);
    }

    function handleOutsideClick(e){
        if (entry.target.contains(e.target)) {
            return;
        }
        else{
            setModalOpen(false);
        }
    }

    useEffect(() =>{
        if(inView){
            document.addEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick)
        };
        
    }, [entry])

    return (
        <StyledUl ref={ref}
            // initial={{
            //     x: 200
            // }}
            // animate={{
            //     x: 0
            // }}
        >
            <div className="close-modal" onClick={closeModal}>X</div>
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
        </StyledUl>
    )
}

export default MobileNav
