import React from "react";
import styles from "./storyCard.module.css";
import { ExternalLink } from "../Links";
import { SectionTitle } from "../sectionTitle";
import { Labels, Label } from "../Labels/";
import { Divider } from "../divider";

export function StoryCard ({title="", description="", tags=[], imgFile="", links=[], children}) {

    return (    
        <div className={styles.wrapper} >
            <h1 className={`${styles.title} ${styles.title__project}`}>{title}</h1>
            <Divider width="100%" orient="bottom"  />
            <div className={styles['info-container']} >
                <img className={styles.preview} alt={title} src={imgFile} />
                <div className={styles.summary_wrapper} >

                    {/*  'Tools Used'  */}
                    <section className={styles.tools__section} >
                        <h3 className={styles.subtitle}>Tools Used</h3>
                            <Labels >
                                {tags.map((t,i) => <Label key={i} text={t} variant={"status"} />)}
                            </Labels>
                    </section>

                    {/*   'Overview'    */}
                    {/* <Divider width="90%" orient="top"  /> */}
                    <section className={styles.overview__section} >
                        <h3 className={styles.subtitle} >Overview</h3>
                        <p className={styles.overview__body} >{description}</p>
                    </section>

                    {/*     'Links'     */}
                    {/* <Divider width="90%" orient="top" /> */}
                    <section className={styles.links__section} >
                        <h3 className={styles.subtitle}>Links</h3>
                        <span className={styles.links__container} >
                            {links.map((l,i)=>
                                <ExternalLink key={i} 
                                    isButton={true} 
                                    urlText={l.urlText} 
                                    urlHref={l.urlLink} 
                                />
                            )}
                        </span>
                    </section>

                </div>
              
            </div>
            {/* <Divider width="100%" orient="top"  /> */}
        
            {children}
        </div>
    )
}

