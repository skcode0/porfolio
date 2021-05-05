import styled from 'styled-components';

export const StyledProjectWrapper = styled.div`

`

export const StyledProject = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;


    .project-description{
        margin: 50px;

        h2{
            margin: 20px 0;
        }

        p{
            margin: 10px 0;
        }

        button{
            background-color: var(--secondary);
        }
    }

    img{
        width: 40%;
        border-radius: 20px;
    }
`