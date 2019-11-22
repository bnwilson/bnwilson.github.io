import React from 'react';
import '../styles/styles.css';

const About = (props) => {
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