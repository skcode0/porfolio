import styled from 'styled-components';

export const StyledIntro = styled.div`
    min-height: 93vh;
    position: relative;
    font-size: 4rem;

    .intro{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        color: var(--complementary);
    }

    .type-writer{
        color: var(--secondary);
    }

    button{
        letter-spacing: 1px;
        font-size: 1.3rem;
    }

    .about-me-btn{
        background-color: var(--secondary);
        color: white;
    }

    button:hover{
        background-color: white;
        color: var(--secondary);
    }

    .resume-btn{
        background-color: var(--complementary);
    }

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }

    @media screen and (max-width: 320px){
        font-size: 2.3rem;
    }
`