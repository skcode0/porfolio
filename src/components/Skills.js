import React from 'react';
import { StyledTitle, SkillBox, SkillDiv } from './Skills.style';

import htmlIcon from '../img/html5.svg';
import cssIcon from '../img/css3.svg';
import jsIcon from '../img/javascript.svg';
import bootstrapIcon from '../img/bootstrap.svg';
import SASSIcon from '../img/sass.svg';
import ReactIcon from '../img/react.svg';
import ReduxIcon from '../img/redux.svg';
import JestIcon from '../img/jest.svg';
import JasmineIcon from '../img/jasmine.svg';
import styledCompIcon from '../img/styled-components.svg';

import gitIcon from '../img/git.svg';
import githubIcon from '../img/github.svg';
import vscodeIcon from '../img/vscode.svg';
import webpackIcon from '../img/webpack.svg';
import npmIcon from '../img/npm.svg';
import figmaIcon from '../img/figma.svg';

import korean from '../img/korean.svg';
import organization from '../img/organization.svg';
import teaching from '../img/teaching.svg';
import planning from '../img/planning.svg';
import learning from '../img/learning.svg';
import responsive from '../img/responsive.svg';
import collaboration from '../img/collaboration.svg';

import Skill from './Skill';

function Skills() {
    return (
        <div className="div-width" id="skills">
            <StyledTitle>
                <h1>Skills</h1>
                <div className="hr-line"></div>
            </StyledTitle>

            <SkillDiv>
                <h2>Languages/Frameworks/Libraries</h2>
                <SkillBox>
                    <Skill src={htmlIcon} alt="html5 icon" text="HTML"/>
                    <Skill src={cssIcon} alt="css3 icon" text="CSS"/>
                    <Skill src={jsIcon} alt="js icon" text="JavaScript"/>
                    <Skill src={bootstrapIcon} alt="bootstrap icon" text="Bootstrap"/>
                    <Skill src={SASSIcon} alt="SASS icon" text="SASS"/>
                    <Skill src={ReactIcon} alt="React icon" text="React"/>
                    <Skill src={ReduxIcon} alt="Redux icon" text="Redux"/>
                    <Skill src={JestIcon} alt="Jest icon" text="Jest"/>
                    <Skill src={JasmineIcon} alt="Jasmine icon" text="Jasmine"/>
                    <Skill src={styledCompIcon} alt="Styled Components icon" text="Styled Component"/>
                </SkillBox>
            </SkillDiv>

            <SkillDiv>
                <h2>Technologies</h2>
                <SkillBox>
                    <Skill src={gitIcon} alt="git icon" text="Git"/>
                    <Skill src={githubIcon} alt="gihub icon" text="Github"/>
                    <Skill src={vscodeIcon} alt="VS Code icon" text="VS Code"/>
                    <Skill src={webpackIcon} alt="Webpack icon" text="Webpack"/>
                    <Skill src={npmIcon} alt="NPM icon" text="NPM"/>
                    <Skill src={figmaIcon} alt="Figma icon" text="Figma"/>
                </SkillBox>
            </SkillDiv>

            <SkillDiv>
                <h2>Miscellaneous/Soft Skills</h2>
                <SkillBox>
                    <Skill src={korean} alt="Korean icon" text="Korean"/>
                    <Skill src={teaching} alt="Teaching icon" text="Teaching"/>
                    <Skill src={organization} alt="Organization icon" text="Organization"/>
                    <Skill src={planning} alt="Planning icon" text="Planning"/>
                    <Skill src={learning} alt="Learning icon" text="Striving to learn"/>
                    <Skill src={responsive} alt="Responsive icon" text="Responsive"/>
                    <Skill src={collaboration} alt="Collaboration icon" text="Collaboration"/>
                </SkillBox>
            </SkillDiv>
            
        </div>
    )
}

export default Skills
