import React from "react"

/**
 * 
 * @param {string} title text appearing in the middle of divider line 
 * @returns 
 */
export function SectionTitle ({title=""}) {

    return (
        <div className="main_content__divider_title">{title}</div>
    )
}