import React from "react"

/**
 * 
 * @param {string} title text appearing in the middle of divider line 
 * @param {boolean} isSectionHeader flag to indicate additional styling for page header
 * @returns 
 */
export function SectionTitle ({title="", isSectionHeader=false}) {
    let cssClassName = "main_content__divider_title";
    cssClassName += isSectionHeader ? " section-header" : "";

    return (
        <div className={cssClassName}>{title}</div>
    )
}