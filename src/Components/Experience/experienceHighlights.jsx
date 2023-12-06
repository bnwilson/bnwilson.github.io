import React from "react";
import styles from './experienceHighlights.module.css';
import { unicodeChars } from "../../utils/unicodeChars";
import {Divider} from "../divider"


/**
 * Component to be utilized on Home page as a high-level exp breakdown
 * 
 * `{headingText: "", experienceHighlights: [...{}]}`
 */
export function ExperienceHighlights ({headingText="", experienceHighlights=[]}) {


    return (
    // <> 
    // </>
    <div className={styles['xp-wrapper']}>
        {experienceHighlights.map((exp, i) => {
            const {years, highlight} = exp;
            return (
                <div className={styles['xp-container']} key={i}> 
                    {i !== 0 && <Divider/>}
                    <h2 className={styles['xp-item__heading']}>{`${years}+ years`}&nbsp;&nbsp;{' =>'}</h2>
                    <section className={styles['xp-item__highlight']}>
                        {`${unicodeChars.checkMark} ${highlight}`}
                    </section>
                </div>
            )
        })}
    </div>
    )
}