import React from 'react';
import { StyledProjectWrapper } from './Projects.style';
import { StyledTitle } from './Skills.style';
import PinterestClone from '../img/pinterest-clone.png';
import weather from '../img/weather.png';
import shoppingCart from '../img/shopping-cart.png';
import Project from './Project';

function Projects() {
    return (
        <StyledProjectWrapper className="div-width" id="projects">
            <StyledTitle data-aos="fade-up">
                <h1>Featured Projects</h1>
                <div className="hr-line"></div>
            </StyledTitle>
            
            <Project
                title = "Pinterest Clone"
                description = "Creating a clone of a popular image-sharing website, Pinterest."
                builtWith = {["React", "Styled Components", "UnSplash API"]}
                code = "https://github.com/skcode0/pinterest-clone"
                demo = "https://skcode0.github.io/pinterest-clone/"
                img={PinterestClone}
            />

            <Project
                title = "Weather App"
                description = "A weather app that gets current weather information of a location."
                builtWith = {["Webpack", "JavaScript", "CSS", "OpenWeatherMap API"]}
                code = "https://github.com/skcode0/weather_app"
                demo = "https://skcode0.github.io/weather_app/"
                img={weather}
                reverse={true}
            />

            <Project
                title = "Shopping Cart"
                description = "An online game shop where you can buy games from different platforms."
                builtWith = {["React", "CSS"]}
                code = "https://github.com/skcode0/shopping_cart"
                demo = "https://skcode0.github.io/shopping_cart/"
                img={shoppingCart}
            />
        </StyledProjectWrapper>
    )
}

export default Projects
