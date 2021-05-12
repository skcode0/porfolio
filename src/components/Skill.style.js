import styled from 'styled-components';

export const StyledSkill = styled.div`
    padding: 10px;
    text-align: center;
    border-radius: 20px;
    margin: 0 10px;

    .js-tilt-glare{
        border-radius: inherit;
    }

    :hover{
        box-shadow: 3px 3px 3px 3px black;
        transform: scale(1.1);

        img{
            -webkit-filter: drop-shadow(7px 7px 3px black);
                    filter: drop-shadow(5px 5px 5px black);
        }

        p{
            text-shadow: 4px 4px 5px black;
        }
    }

    @media screen and (max-width: 370px) {
        p{
            font-size: 0.7rem;
        }
    }
`