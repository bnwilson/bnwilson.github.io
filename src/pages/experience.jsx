import React, {useState} from 'react';
import '../styles/exp.css';
import {experienceSections} from '../static/experience-sections'
import { ExperienceFolder } from '../Components/Experience';
import { SectionTitle } from '../Components/sectionTitle';
// {/* <img className="experience_arrow" src={Arrow} alt={""}></img> */}

export const Experience = (props) => {
    const sectionItems = experienceSections;
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    
    function handleTabClick (event) {
        const val = Number(event.currentTarget.getAttribute('value'));
        if (val !== activeTabIndex) {
            setActiveTabIndex(val);
        }
    }

    return (
        <div className="experience-wrapper">
            {/* Header */}
            <SectionTitle title="Experiences" />
            {props.children}
            <div className="experience_tabs">
                {sectionItems.map((item, index) => (
                    <label className={index === activeTabIndex ? "experience_tab_active" : "experience_tab"}
                        key={index}
                        value={index}
                        onClick={handleTabClick}
                    >
                    {item.label}    
                    </label>
                ))}
            </div>
                {
                    <ExperienceFolder 
                        title={sectionItems[activeTabIndex].title} 
                        experience={sectionItems[activeTabIndex].experience}
                    />
                }
        </div>
    )
}
// export default Experience;

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
