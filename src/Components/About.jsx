import React from 'react';
import '../styles/styles.css';
import '../styles/about.css';

function addRemoveHidden(elementClass) {
    const items = document.querySelectorAll(elementClass);
    
    let i = 0;
    let interval = setInterval(() =>{
        let item = items[i];
        item.classList.toggle('toggle-hidden');
        i === items.length - 1 ? clearInterval(interval) : i++;
    }, 2000)
}

function About () {
    const handleClick = (event) => {
        const value = event.currentTarget.getAttribute('value');
        value === "average" ? 
            addRemoveHidden('.about-list-avg li:not(:first-child)') : 
            addRemoveHidden('.about-list-awesome li:not(:first-child')
    }

    return (
        <div>
            <span className="content_box">
                <div className="about-list-avg">
                    <ul>
                        <li>
                                <h2 
                                    className="about-header"
                                    onClick={handleClick}
                                    value="average"
                                    >Average...
                                </h2>
                        </li>
                        <li className="about-hidden">>Golfer</li>
                        <li className="about-hidden">Bowler</li>
                        <li className="about-hidden">Gamer</li>
                        <li className="about-hidden">Guitarist</li>
                        <li className="about-hidden">Tinker</li>
                    </ul>
                </div>
                <ul className="about-list-awesome">
                    <li>
                        <h2 
                            className="about-header"
                            onClick={handleClick}
                            value="awesome"
                            >Awesome...
                        </h2>
                    </li>
                    <li className="about-hidden">Full-stack Javascript Developer</li>
                    <li className="about-hidden">Agile and Scrum practitioner</li>
                    <li className="about-hidden">Ping-Pong / Table Tennis-er</li>
                    <li className="about-hidden">Pair-Program practitionerCo-worker</li>
                    <li className="about-hidden">Employee</li>
                    <li className="about-hidden">OAS Follower</li>
                    <li className="about-hidden">Friend</li>
                </ul>
            </span>
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