import React, {useEffect} from 'react';
import '../styles/about.css';
import '../styles/styles.css';
import Logo from './Logo';

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
    useEffect(() => {
        addRemoveHidden('.about-list-avg li');
        addRemoveHidden('.about-list-awesome li');
    },[])
    
    return (
        <div className="about__content-wrapper">
            {props.children}
            <div className="about-me-wrapper">
                <span className="about-me__subheader">
                    <Logo/>
                    <span className="about_text-box">
                        <h2 className="about_text_greeting">Hello!</h2>
                        <p className="about_text">
                            My name is Brad - I'm a full-stack Javascript / Typescript developer 
                            from Columbus, Ohio. This portfolio was created with React as a Single Page Application.
                            <br/>
                            <br/>
                            Thanks for checking it out!
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
                            <li className="about-hidden">Automater</li>
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
                            <li className="about-hidden">Pair-Program practitioner</li>
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

export default About;