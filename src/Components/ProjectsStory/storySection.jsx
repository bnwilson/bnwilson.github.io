import React, { useState } from "react";
import { Label, Labels } from "../Labels";
import styles from "./storySection.module.css";


export function StorySection({sectionTitle="", sectionDescription="", tools=[], isSelected=true}) {
    const sectionClassName = isSelected 
        ? styles['story-section'] + " " + styles.selected 
        : styles['story-section']

    return (
        <div className={sectionClassName}>
            <section className={styles['story-section__desc']} >
            {/* <h4 className={styles['story-section__title']} >
                {sectionTitle}
            </h4> */}
                {/* <h4 className={styles['desc-heading']} > Description </h4> */}
                <p className={styles['desc-body']}>
                    {/* <label style={{fontWeight: 'bold'}}>{`${sectionTitle}: `}</label> */}
                    {sectionDescription}
                </p>
            </section>
            {tools && 
                <div className={styles.tools} >
                    <Labels >
                        {tools.map((tag,i)=>
                            <Label variant="lightweight" text={tag} key={i} />
                        )}
                    </Labels>
                </div>

            }
        </div>
    )
}

export function StorySections({sections=[]}) {
    /* State:  activeTab */
    const [activeTab, setActiveTab] = useState(0)

    const sectionTabs = sections.map(s=>s.sectionTitle)

    /** Tab Selection Handler (JSDoc used for IDE)
     * @type {React.MouseEventHandler<HTMLDivElement>} 
     * @param {React.MouseEvent<HTMLDivElement>} e
     */
    const handleTabSelection = (e) => {
        const tabIndexStr = e.currentTarget.dataset.tabIndex
        const tabIndex = Number(tabIndexStr)
        const alreadyActive = e.currentTarget.classList.contains('active-tab')
        if (!alreadyActive) {
            setActiveTab(tabIndex)
        }
    }

    return (
        sections.length ?
            <div className={styles.wrapper}>
                <div className={styles.tabs} >
                {sectionTabs.map((s,t)=> {
                    const tabClassName = t === activeTab ? 
                        `${styles.tab} ${styles['active-tab']}` :
                        styles.tab
                    return (<label 
                        className={tabClassName} 
                        data-tab-index={t} 
                        key={t}
                        onClick={handleTabSelection}
                    >
                        {s}
                    </label>)
                })}
                </div>
                {sections.map((s,i)=><StorySection isSelected={i===activeTab} {...s} />)} 
            </div>
            
            : <></>
    )
}