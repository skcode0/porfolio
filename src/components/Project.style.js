import styled from 'styled-components';

export const StyledProject = styled.div`
    display: flex;
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    overflow: hidden;

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

    .img-wrapper{
        width: 40%;
        border-radius: 20px;

        img{
            width: 100%;
            border-radius: inherit;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 1280px) {
        .project-description{
            margin: 25px;
        }

        .img-wrapper{
            width: 70%;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .project-description{
            margin: 10px;
        }

        .img-wrapper{
            width: 100%;
        }
    }
`