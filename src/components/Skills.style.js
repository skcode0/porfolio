import styled from 'styled-components';
import { StyledAboutTitle } from './About.style';

export const StyledTitle = styled(StyledAboutTitle)`
    width: 50%;
    justify-content: flex-start;
`

export const SkillDiv = styled.div`
    margin: 5px 0;

    h2{
        margin: 20px 0;
    }
`

export const SkillBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 1rem;
    align-items: center;
`