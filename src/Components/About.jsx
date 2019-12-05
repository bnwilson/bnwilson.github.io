import React, {useEffect} from 'react';
import '../styles/styles.css';
import '../styles/about.css';
import {Logo} from './Header';

function addRemoveHidden(elementClass) {
    const items = document.querySelectorAll(elementClass);
    
    let i = 0;
    let interval = setInterval(() =>{
        let item = items[i];
        item.classList.toggle('toggle-hidden');
        i === items.length - 1 ? clearInterval(interval) : i++;
    }, 1400)
}

function About (props) {
    const handleClick = (event) => {
        const value = event.currentTarget.getAttribute('value');
        value === "average" ? 
            addRemoveHidden('.about-list-avg li') : 
            addRemoveHidden('.about-list-awesome li')
    }

    useEffect(() => {
        addRemoveHidden('.about-list-avg li');
        addRemoveHidden('.about-list-awesome li');
    })
    
    return (
        <div className="about__content-wrapper">
            {props.children}
            <div className="about-me-wrapper">
                <span className="about-me__subheader">
                    <Logo/>
                    <span className="about_text-box">
                        <p className="about_text">
                            Hello! 
                            <br/><br/>
                            My name is Brad - I'm a full-stack Javascript developer 
                            from Columbus, Ohio. 
                            <br/>
                            
                            <br/><br/>
                            Thanks for checking out my portfolio!
                        </p>
                    </span>
                </span>
            </div>
            <div className="about-wrapper">
                <span className="content_box">
                    <div className="about-header__wrapper">
                        {/* <h2 
                            className="about-button average-title"
                            onClick={handleClick}
                            value="average"
                            >Average
                        </h2> */}
                    </div>
                    <div className="about-list-avg">
                        <h1 className="about-list--title">Average...</h1>
                        <ul>
                            <li className="about-hidden">Golfer</li>
                            <li className="about-hidden">Bowler</li>
                            <li className="about-hidden">Gamer</li>
                            <li className="about-hidden">Guitarist</li>
                            <li className="about-hidden">Tinkerer</li>
                            <li className="about-hidden">Autuomater</li>
                            <li className="about-hidden">Tennis player</li>
                            
                        </ul>
                    </div>
                </span>
                <span className="content_box">
                    <div className="about-header__wrapper">
                        {/* <h2 
                            className="about-button awesome-title"
                            onClick={handleClick}
                            value="awesome"
                            >Awesome
                        </h2> */}
                    </div>
                    <div className="about-list-awesome">
                        <h1 className="about-list--title">Awesome...</h1>
                        <ul>
                            <li className="about-hidden">Full-stack Javascript Developer</li>
                            <li className="about-hidden">Agile and Scrum practitioner</li>
                            <li className="about-hidden">Ping-Pong / Table Tennis-er</li>
                            <li className="about-hidden">Pair-Program practitionerCo-worker</li>
                            <li className="about-hidden">Co-worker</li>
                            <li className="about-hidden">Employee</li>
                            <li className="about-hidden">OAS Follower</li>
                            <li className="about-hidden">Friend</li>
                        </ul>
                    </div>
                </span>
            </div>
        </div>
    )
}

const OldAbout = (props) => {
    return (
        <div className="main__content-wrapper">
            {props.children}
            <span className="main__content__about-box">
                <ul className="main__content__about-box-list">
                    <li>
                        <h2 className="main__content__about-box-list__subtitle">
                            Average...
                        </h2>
                    </li>
                    <li>Golfer</li>
                    <li>Bowler</li>
                    <li>Gamer</li>
                    <li>Guitarist</li>
                    <li>Tinker</li>
                </ul>
                
                <ul className="main__content__about-box-list">
                    <li>
                        <h2 className="main__content__about-box-list__subtitle">
                            Awesome...
                        </h2>
                    </li>
                    <li>Full-stack Javascript Developer</li>
                    <li>Agile and Scrum practitioner</li>
                    <li>Ping-Pong / Table Tennis-er</li>
                    <li>Pair-Program practitionerCo-worker</li>
                    <li>Employee</li>
                    <li>OAS Follower</li>
                    <li>Friend</li>
                </ul>
            </span>
        </div>
    )
}

export default About;