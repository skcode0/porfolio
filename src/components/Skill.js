import React, { useEffect, useRef } from 'react';
import { StyledSkill } from './Skill.style';
import VanillaTilt from 'vanilla-tilt';

function Skill(props) {
    const { src, alt, text } = props;
    const tiltRef = useRef(null);

    // options for vanilla tilt
    const options = {
        glare: true,
        "max-glare": 0.5,
        reverse: true,
    }

    useEffect(() =>{
        VanillaTilt.init(tiltRef.current, options);
    }, []);

    return (
        <StyledSkill ref={tiltRef}>
                <img src={src} alt={alt}/>
                <p>{text}</p>
        </StyledSkill>
    )
}

export default Skill
