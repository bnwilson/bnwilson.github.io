import React from 'react';
import '../styles/styles.css';

const Projects = (props) => {
    return (
        <div className="main__content-wrapper">
            {props.children}
            <table className="main__body-table">
                <caption className="main__body-table-caption">My collection of publically-shared projects. Feel free to reach out to me with any questions, or raise a Github issue!
                <br/><br/>
                </caption>
                <thead className="main__body-table-thead">
                    <tr>
                        <th><h4>Project Name</h4></th>
                        <th><h4>Description</h4></th>
                        <th><h4>Tools Used</h4></th>
                        <th><h4>Link</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Highstreet Hospital</th>
                        <td>Console-based Hospital. Generates Hospital staff, patients, along with randomized names.</td>
                        <td>NodeJS, Javascript (ES6), readline-sync, https (REST call to name-generator)</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/high-street-hospital">Github Link</a></td>
                    </tr>
                    <tr>
                        <th>Fortune Teller</th>
                        <td>Answer a series of questions and get your fortune read! The results are not always crystal clear.</td>
                        <td>NodeJS, Javascript (ES6), readline-sync</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/fortune-teller">Github Link</a></td>
                    </tr>
                    <tr>
                        <th>Guessing Game</th>
                        <td>You get 3 tries to guess a number 1-10, if you don't guess the correct number in 3 tries you lose!</td>
                        <td>NodeJS, Javascript (ES6), readline-sync</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/guessing-game">Github Link</a></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Move Mac Screenshots</th>
                        <td>Script which moves my MacOS Desktop screenshots to a screenshot folder.</td>
                        <td>Python</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/move-mac-screenshots">Github Link</a></td>
                    </tr>
                </tfoot>
                

            </table>
        </div>
    )
}

export default Projects;