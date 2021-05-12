import styled from 'styled-components';

export const StyledNav = styled.nav`
    background-color: var(--primary);
    position: sticky;
    top: 0;
    height: 7vh;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    margin-left: 4rem;
    align-items: center;

    .logo a{
        background-image: -webkit-linear-gradient(-45deg, var(--secondary) 55%, var(--complementary) 45%);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        font-size: 1.7rem;
        font-weight: bold;
        text-align: center;
    }

    .logo a:hover{
        background-image: -webkit-linear-gradient(45deg, var(--complementary) 55%, var(--secondary) 45%);
    }

    .destop-ul{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    li{
        position: relative;
    }

    li a::after{
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-image: -webkit-linear-gradient(45deg, var(--complementary) 50%, var(--secondary) 50%);
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    li a:hover::after{
        transform: scaleX(1);
    }

    @media screen and (max-width: 1024px) {
        justify-content: space-around;
        margin-left: 0;
    }

    @media screen and (max-width: 900px) {

        .logo a{
            margin-left: 0;
        }
        
        .destop-ul{
            display: none;
        }
    }
`

export const StyledMobileNav = styled.div`
    display: none;

    img{
        width: 40px;

        :hover{
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 900px) {
        display: block;
    }
`