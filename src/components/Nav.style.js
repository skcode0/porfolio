import styled from 'styled-components';

export const StyledNav = styled.nav`
    background-color: var(--primary);
    position: sticky;
    top: 0;
    height: 7vh;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;

/* //! make animation */
    .logo a{
        background-image: -webkit-linear-gradient(-45deg, var(--secondary) 55%, var(--complementary) 45%);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
            font-size: 1.7rem;
        border: 1px red solid;
        margin-left: 6rem;
        font-weight: bold;
        text-align: center;
    }

    .logo a:hover{
        background-image: -webkit-linear-gradient(45deg, var(--complementary) 55%, var(--secondary) 45%);
    }

    ul{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px red solid;
    }

    li{
        position: relative;
    }

/* //! make animation */

    li a::after{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: red;
        /* display: none; */
    }

    li a:hover::after{
        background-color: blue;
    }
`