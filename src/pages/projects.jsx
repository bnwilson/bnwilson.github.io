import React from 'react';
import '../styles/styles.css';
import '../styles/project.css';
import { SectionTitle } from '../Components/sectionTitle';
import { ProjectsTable } from '../Components/ProjectsTable/projectsTable';

const ProjectData = require('../static/project-data');
const projectsContent = require('../static/projects-content');

const Projects = (props) => {

    /* Build props for ProjectsTable | filter relevant 'projectsContent' info by section id */
    const getSectionRowData = (section={id:"", name:"", caption:""}) => {
        const headers = projectsContent.projectHeaders
        const rows = projectsContent.projectItems.filter(projectInfo => section.id && section.id === projectInfo.sectionId);
        return {
            ...section,
            headers,
            rows
        }
    }

    return (
    < div className="main__content-wrapper">
        {props.children}

        <SectionTitle title="Projects" />

        <p className="project-table__caption">
            {ProjectData.projectCaption}
        </p>

        {/* Render out a table +s ection-divider for each unique section ( i.e. -> projectsContent.section[...{}] ) */}
        {projectsContent.projectSections.map((sectionInfo, i) =>
            <>
                <SectionTitle title={sectionInfo.name} />
                <ProjectsTable {...getSectionRowData(sectionInfo)} />
            </>
        )}

        {/* Giving credit to flaticon author, Dave Gandy */}
        <div className="icon-credit">
            External Icon made by 
            <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">
                Dave Gandy
            </a> 
            from <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
            </a>
        </div>
    </div>
    )
}

export default Projects;

/* 12-2-29 -- Converted the below table to resable component "src/component/ProjectsTable{{.projectsTable}}.jsx"
<table className="project-table">
<thead className="project-table__header">
    <tr className="project-table__row">
        {ProjectData.projectHeaders.map((item, index) => (
            <th key={index}><h4>{item}</h4></th>
        ))}
    </tr>
</thead>
<tbody className="project-table__body">
    {ProjectData.projectItems.map((project, i) => (
        <tr className="project-table__row" key={i}>
            <th>{project.title}</th>
            <td>{project.info}</td>
            <td>{project.tools}</td>
            <td className='project-table__row-link'>
                <a 
                    rel="noopener noreferrer"
                    dataicon="external" 
                    target="_blank"
                    href={project.urlLink}
                >
                    {project.urlText}
                    <ExternalIcon fill="rgba(23, 56, 66, 0.739)" className="project-table__row-link_icon" />
                </a>
                
            </td>
        </tr>
    ))}
</tbody>
</table>

 */