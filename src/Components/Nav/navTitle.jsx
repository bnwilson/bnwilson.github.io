import React from "react";
const navTitleContainerStyling = {
    "display": "flex",
    "flexDirection": "column"
}

const navTitleStyling = {
    "fontSize": "18px"

}

/**
 * Note:  class styling currently in `src/styles/styles.css`
 * @param {{title: string, subTitle: string}} props 
 * @returns 
 */
export function NavTitle ({title="", subTitle=""}) {
    const navSiteTitle = title ? title : "Brad Wilson"
    const navSiteSubTitle = subTitle ? subTitle : "Full-Stack Dev"

    return (
        <div className="main_navbar__title_box">
            <span className="main_navbar__title">{navSiteTitle}</span>
            <span className="main_navbar__subtitle">{navSiteSubTitle}</span>
        </div>
    )
}