import React from 'react';
import '../styles/styles.css';

const Experience = (props) => {
    return (
        <div class="main__content-wrapper">
            {props.children}
            <ul class="main__body-exp-list">
                <li>Utilized Python, Shell, and Orchestration to automate manual processes.</li>
                <li>Leveraged Apigee and cloud-agnostic Function As a Service to house serverless functions for automation and testing.</li>
                <li>Built ChatOps chatbot using Github's Hubot framework (NodeJS) with an adapter for Rocketchat.</li>
            </ul>

        </div>
    )
}

export default Experience;