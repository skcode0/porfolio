import styled from 'styled-components';

export const StyledContact = styled.div`

    .contact-icons{
        display: flex;
        justify-content: space-around;

        a{
            text-align: center;

            img{
                margin: 0 10px;
            }

            
            :hover{
                transform: scale(1.1);
            }
        }
    }
`