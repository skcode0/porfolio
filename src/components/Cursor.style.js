import styled from 'styled-components';

export const StyledCursor = styled.div`
    width: 25px;
    height: 25px;
    background-color: var(--secondary);
    border-radius: 50px;
    pointer-events: none;
    z-index: 9999999999999999;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    mix-blend-mode: exclusion;
`