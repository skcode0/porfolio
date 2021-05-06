import styled from 'styled-components';

export const StyledProject = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
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

        .tags{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tag{
            background-color: rgb(31, 250, 210, 0.9);
            border-radius: 50px;
            padding: 5px 10px;
            color: black;
            font-size: 0.8rem;
        }

        .btn-container{
            margin-top: 1rem;
        }

        button{
            background-color: var(--secondary);
            color: white;
            font-size: 1rem;
        }
    }

    img{
        width: 40%;
        border-radius: 20px;
    }
`