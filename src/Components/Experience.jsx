import React, {useState} from 'react';
import '../styles/styles.css';
import '../styles/exp.css';
import Arrow from '../img/arrow.png';

const experienceSections = [
    {
        title: "Summary of Experience",
        label: "Summary",
        experience: [
            "Currently I am a full-stack developer specializing in MERN and JAM stack.",
            "I have experience in following and championing development practices such as TDD, Pair-Programming, and version-control.",
            "I've written Python, Shell, Javascript, Orchestration flows to automate manual processes. leveraged Apigee and cloud-agnostic Function As a Service for automation and testing.",
            "I have working knowledge of numerous environments, including: AWS (EC2, S3), Linux/Unix, Windows, Docker/Kubernetes, and zOS (mainframe).",
            "In my spare time I like to work on BLAillustrations - a Netlify-hosted JAMstack site with NetlifyCMS for BLAIllustrations artwork."
        ]
    },
    {
        title: "Front-End Experience",
        label: "Frontend",
        experience: [
            "ReactJS", "HTML/CSS3 (Flex/Grid)", "Javascript (2015, ES6+)", "Webpack (bundling, config, and utilizing builders)",
            "NextJS (static html builder)", "Handlebars", "JAM Stack", "MERN Stack"
        ]
    },
    {
        title: "Back-End Experience",
        label: "Backend",
        experience: [
            "NodeJS", "ExpressJS", "Python 2.7 & Python 3+", "Model View Controller (MVC) Framework",
            "Sequelize (ORM) for My SQL", "Mongoose for MongoDB", "bash/shell scripting",
            "Urban Code Deploy", "Github"
        ]
    },
    {
        title: "DevOps",
        label: "DevOps Experience",
        experience: [
            "Containerization with Docker, Kubernetes, and helm.",
            "Utilizing Function As A Service (FaaS) in a hosting and enterprise environment.",
            "Experience using AWS EC2, Lambda, and S3 Buckets.",
            "Building ChatOps bots to streamline deployment administration and configuration."
        ]
    }
]



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

const ExperienceMain = ({props}) => {
    // experience: <Array> :: title: <string>
    return (
        <div className="experience_text">
            <h2 className="experience_header">
                {props.title}
            </h2>
            <div >
                {props.experience.map((item, index) => (
                    <ExperienceCard text={item} key={index}/>
                ))}
            </div>

        </div>
    )
}

const Experience = (props) => {
    const sectionItems = experienceSections;
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    function handleTabClick (event) {
        const val = Number(event.currentTarget.getAttribute('value'));
        if (val !== activeTabIndex) {
            setActiveTabIndex(val);
        }
    }

    return (
        <div className="main__content-wrapper">
            {/* Header */}
            {props.children}
            <div className="experience_tabs">
                {sectionItems.map((item, index) => (
                    <label className="experience_tab"
                        key={index}
                        value={index}
                        onClick={handleTabClick}
                    >
                    {item.label}    
                    </label>
                ))}
            </div>
                {
                    <ExperienceMain props={sectionItems[activeTabIndex]}/>
                }
        </div>
    )
}

// **** Commenting out for now ****
// const OldExperience = (props) => {
    
//     const [experiences, setExperiences] = useState([
//         "Currently a full-stack developer utilizing NodeJS, Express, Javascript, MongoDB, and React (this portfolio was created using React).",
//         "Followed and championed development practices such as TDD, pair-programming, Agile, and version-control",
//         "My IT contributions span over the course of 6 years in various spaces: Operations, Infrastructure, Automation, and Hosting Solutions",
//         "I've written Python, Shell, Javascript, Orchestration flows to automate manual processes. leveraged Apigee and cloud-agnostic Function As a Service for automation and testing.",
//         "I have working knowledge of numerous environments, including: AWS (EC2, S3), Linux/Unix, Windows, Docker/Kubernetes, and zOS (mainframe)",
//         "In my spare time, I like to build chatbots and build a locally-hosted website incorporating home-automation, weather, and other cool stuff"
//     ]);

//     return (
//         <div className="main__content-wrapper">
//             {props.children}
//             {experiences.map((text, index) => (
//                 <ExperienceCard key={index} text={text} />
//             ))}
//         </div>
//     )
// }

export default Experience;