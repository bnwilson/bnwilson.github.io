import React from "react";
import { ExperienceCard } from "./experienceCard";
/**
 * 
 * @param {{"title": string, "label": string, "experience": string[]}[]} props 
 * @returns ExperienceFolder
 */
export const ExperienceFolder = (props={title:"",label:"",experience:[""]}) => {
    const {title, label, experience} = props;
    // experience: <Array> :: title: <string>
    return (
        <div className="experience_content">
            <h2 className="experience_header">
                {title}
            </h2>
            <div className="experiences">
                {experience.map((item, index) => (
                    <ExperienceCard cardText={item} key={index}/>
                ))}
            </div>

        </div>
    )
}