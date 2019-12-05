import React, {useState} from 'react';
import '../styles/styles.css';
import '../styles/exp.css';
import Arrow from '../img/arrow.png';

const ExperienceCard = ({text}) => {
    return (
        <div className="experience_card">
                <span className="experience_card-wrapper">
                    <img className="experience_arrow" src={Arrow} alt={""}></img>
                </span>
                <span className="experience_card-wrapper">
                    <p className="experience_text">
                        {text}
                    </p>
                </span>
            </div>
    )
}

const Experience = (props) => {
    const [experiences, setExperiences] = useState([
        "Currently a full-stack developer utilizing NodeJS, Express, Javascript, MongoDB, and React (this portfolio was created using React).",
        "Followed and championed development practices such as TDD, pair-programming, Agile, and version-control",
        "My IT contributions span over the course of 6 years in various spaces: Operations, Infrastructure, Automation, and Hosting Solutions",
        "I've written Python, Shell, Javascript, Orchestration flows to automate manual processes. leveraged Apigee and cloud-agnostic Function As a Service for automation and testing.",
        "I have working knowledge of numerous environments, including: AWS (EC2, S3), Linux/Unix, Windows, Docker/Kubernetes, and zOS (mainframe)",
        "In my spare time, I like to build chatbots and build a locally-hosted website incorporating home-automation, weather, and other cool stuff"
    ]);

    return (
        <div className="main__content-wrapper">
            {props.children}
            {experiences.map((text, index) => (
                <ExperienceCard key={index} text={text} />
            ))}
        </div>
    )
}

export default Experience;