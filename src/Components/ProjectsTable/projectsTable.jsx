import React from "react";
import styles from "./projectsTable.module.css"
import { ExternalLink } from "../Links";


/* interface ProjectsTableRowData {
            title: String;
            info: String;
            tools: String;
            urlLink: String;
            urlText: String;
            sectionId: String;
}[] */

/* interface ProjectsTableProps {
        id: String;
        name: String;
        caption: String;
        rows: ProjectsTableRowData[];
} */

/** Flexible `table` (_with `div` wrapper_), made specifically for listing project information
 * 
 * @param {{id:"", name:"", caption:"", headers:[], rows:[]}} 
 * @returns 
 */
export function ProjectsTable ({id="", name="", caption="", headers=[], rows=[]}) {
    

    return (
        <div className={styles['projects-table__container']} >
            <table>
                {/* Table headers */}
                <thead className={styles['projects-table__thead']}>
                {headers && headers.length && 
                    <tr>
                        {headers.map((tHead,i) => 
                            <th key={i} className={styles['projects-table__th']}>
                                { tHead }
                            </th>
                        )}
                    
                    </tr>
                }
                </thead>
                {/* Table body  */}
                <tbody className={styles['projects-table__tbody']}>
                {rows && rows.length && 
                    rows.map((row,i) =>
                    <tr className={styles['projects-table__row']} key={i}>
                        <td className={styles['project-table__row-td']} id={styles.col__name}>{row && row.title}</td>
                        <td className={styles['project-table__row-td']} id={styles.col__desc}>{row && row.info}</td>
                        <td className={styles['project-table__row-td']} id={styles.col__tools} >{row && row.tools}</td>
                        <td className={styles['project-table__row-td']} id={styles.col__link}>
                            <ExternalLink urlHref={row.urlLink} urlText={row.urlText} />
                        </td>
                    </tr>
                    )
                }
                </tbody>
                {/* Table  Caption */}
                <caption className={styles.table__caption}>{caption}</caption>
            </table>
        </div>
    )
}