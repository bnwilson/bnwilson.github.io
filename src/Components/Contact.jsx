import React from 'react';
import '../styles/styles.css';

const Contact = (props) => {
    return (
        <div class="main__content-wrapper">
            {props.children}
            <h4 class="main__section-subtitle">
                Feel free to contact me with any questions, remarks, feedback or just to shoot the breeze!
            </h4>
            <div class="main__body">
                <ul class="main__body-contact-list">
                    <li><a href="mailto:bwilson.projects@gmail.com">bwilson.projects@gmail.com</a></li>
                    <li><a href="https://linkedin.com/li/bnwilson">LinkedIn</a></li>
                    <li><a href="https://github.com/bnwilson/brad-portfolio/issues">GitHub Issues</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;