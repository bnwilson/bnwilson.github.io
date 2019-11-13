import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Experience from './Experience';

const Title = (title) => {
    return (
        <h1 className="main__content-title">
            {title}
        </h1>
    )
}

const MainContent = (props) => {
    const appContent = {
        "about": About,
        "contact": Contact,
        "projects": Projects,
        "experience": Experience

    }
    const [content, renderContent] = useState('About'); 
        
    useEffect(() => {
        console.log(content);
        return appContent[props.key]
    })
    
    return (
        <div className="main__content">
            <Title title={props.title} />
            {renderContent}
        </div>
    )
}

export default MainContent;