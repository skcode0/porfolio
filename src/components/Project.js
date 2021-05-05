import React, { useEffect, useRef } from 'react';
import { StyledProject } from './Project.style';
import VanillaTilt from 'vanilla-tilt';

function Project(props) {
    const { title, description, builtWith, code, demo, img, reverse } = props;

    console.log(props)
    const projectRef = useRef(null);

    // options for vanilla tilt
    const options = {
        glare: true,
        "max-glare": 1,
        reverse: true,
        max: 10,
        scale: 1.05
    }

    useEffect(() =>{
        VanillaTilt.init(projectRef.current, options);
    }, []);

    return (
        <StyledProject reverse={reverse}>
            <div className="project-description">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="tags">
                    {
                        builtWith.map(tag => <p className="tag">{tag}</p>)
                    }
                </div>
                <div className="btn-container">
                    <a href={code} target="_blank" rel="noreferrer"><button>Code</button></a>
                    <a href={demo} target="_blank" rel="noreferrer"><button>Demo</button></a>
                </div>
            </div>
            
            <img ref={projectRef} src={img} alt={title} />
        </StyledProject>
)
}

export default Project
