import React from 'react';
import { StyledProjectWrapper, StyledProject } from './Projects.style';
import { StyledTitle } from './Skills.style';
import PinterestClone from '../img/pinterest-clone.png';
import weather from '../img/weather.png';
import shoppingCart from '../img/shopping-cart.png';

function Projects() {
    return (
        <StyledProjectWrapper className="div-width" id="projects">
            <StyledTitle>
                <h1>Featured Projects</h1>
                <div className="hr-line"></div>
            </StyledTitle>
            
            <StyledProject>
                <div className="project-description">
                    <h2>Pinterest Clone</h2>
                    <p>Creating a clone of a popular image-sharing website, Pinterest.</p>
                    <p>Built with: React, Styled Components, UnSplash API</p>

                    <div>
                        <button><a href="https://github.com/skcode0/pinterest-clone" target="_blank" rel="noreferrer">Code</a></button>
                        <button><a href="https://skcode0.github.io/pinterest-clone/" target="_blank" rel="noreferrer">Demo</a></button>
                    </div>
                </div>
                
                <img src={PinterestClone} alt="Pinterest Clone"></img>
            </StyledProject>

            <StyledProject>
                <img src={weather} alt="Weather App"></img>

                <div className="project-description">
                    <h2>Weather App</h2>
                    <p>A weather app that gets current weather information of a location.</p>
                    <p>Built with: Webpack, JavaScript, CSS, OpenWeatherMap API</p>

                    <div>
                        <button><a href="https://github.com/skcode0/weather_app" target="_blank" rel="noreferrer">Code</a></button>
                        <button><a href="https://skcode0.github.io/weather_app/" target="_blank" rel="noreferrer">Demo</a></button>
                    </div>
                </div>
            </StyledProject>

            <StyledProject>
                <div className="project-description">
                    <h2>Shopping Cart</h2>
                    <p>An online game shop where you can buy games from different platforms.</p>
                    <p>Built with: React, CSS</p>

                    <div>
                        <button><a href="https://github.com/skcode0/shopping_cart" target="_blank" rel="noreferrer">Code</a></button>
                        <button><a href="https://skcode0.github.io/shopping_cart/" target="_blank" rel="noreferrer">Demo</a></button>
                    </div>
                </div>

                <img src={shoppingCart} alt="Shopping Cart"></img>
            </StyledProject>
        </StyledProjectWrapper>
    )
}

export default Projects
