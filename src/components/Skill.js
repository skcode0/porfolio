import React from 'react';
import { StyledSkill } from './Skill.style';

function Skill(props) {
    const { src, alt, text } = props;

    return (
        <StyledSkill>
                <img src={src} alt={alt}/>
                <p>{text}</p>
        </StyledSkill>
    )
}

export default Skill
