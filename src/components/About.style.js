import styled from 'styled-components';

export const StyledAbout = styled.div`
    border: 1px blue solid;

    .about-me{
        border: 1px yellow solid;
        width: 50%;
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