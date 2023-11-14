import React from "react";
/** ExperienceCard
 * 
 * @param {string} cardText 
 * @returns 
 */
export const ExperienceCard = ({cardText=""}) => {
    return (
        <div className="experience_card">
            <span className="experience_card-wrapper">
                {cardText}
            </span>
        </div>
    )
}