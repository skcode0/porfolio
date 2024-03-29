import styled from 'styled-components';

export const StyledAbout = styled.div`
    display: flex;
    align-items: center;

    .about-me{
        width: 50%;
    }

    .circular-text{
        position: relative;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            position: absolute;
            font-size: 100px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--secondary);
            text-shadow: 2px 2px var(--complementary);
        }
    }

    @media screen and (max-width: 768px) {
        display: block;
        
        .about-me{
            width: 100%;
        }

        .circular-text{
            margin: 20px auto;
        }
    }

    @media screen and (max-width: 411px) {
        .circular-text{
            img{
                width: 200px;
            }

            p{
                font-size: 70px;
            }
        }
    }
`

export const StyledAboutTitle = styled.div`
    display: flex;
    align-items: center;

    h1{
        margin: 20px 0;
        color: var(--secondary);
    }

    .hr-line{
        flex: 1;
        margin: 0 20px;
        height: 3px;
        background-color: var(--complementary);
    }
`