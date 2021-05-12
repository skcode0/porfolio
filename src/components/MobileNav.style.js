import styled from 'styled-components';
import { motion } from 'framer-motion';


export const StyledUl = styled(motion.ul)`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    background-color: #0f0f0f;
    opacity: 0.95;
    padding: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .close-modal{
        font-size: 2rem;

        :hover{
            color: var(--secondary);
        }
    }

    li{
        width: fit-content;
        margin: auto;
    }

    @media screen and (max-width: 425px) {
        width: 70%;
    }
`