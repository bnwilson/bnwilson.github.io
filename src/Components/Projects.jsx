import React from 'react';
import '../styles/styles.css';
import '../styles/project.css';

const Projects = (props) => {
    return (
        <div className="main__content-wrapper">
            {props.children}
            <p className="project-table__caption">
                My collection of publically-shared projects. Feel free to reach out to me with any questions, or raise a Github issue!
            </p>
            <table className="project-table">
                <thead className="project-table__header">
                    <tr className="project-table__row">
                        <th><h4>Project Name</h4></th>
                        <th><h4>Description</h4></th>
                        <th><h4>Tools Used</h4></th>
                        <th><h4>Link</h4></th>
                    </tr>
                </thead>
                <tbody className="project-table__body">
                    <tr className="project-table__row">
                        <th>D&amp;D Character Creator (Frontend)</th>
                        <td>
                            Interactive Dungeons and Dragons&copy; character creator, choose your character Name, Race,
                            Class, Alignment, and input your attributes and the app will calculate your stats,
                            bonus attributes, and stats!.
                        </td>
                        <td>ReactJS, Create React App, Javascript, html/css, fetch, webpack, jest</td>
                        <td><a href="https://github.com/DnDnU/dnd-character-sheet-frontend">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>D&amp;D Character Creator (Backend)</th>
                        <td>
                            API-layer for D&amp;D, utilizes dnd5eapi.co to access up-to-date race and 
                            class data. Also handles the dice rolls for stats (6x d6 rolls and returns highest 3 values).
                        </td>
                        <td>NodeJS, ExpressJS, node-fetch, jest</td>
                        <td><a href="https://github.com/DnDnU/dnd-character-sheet-backend">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>Highstreet Hospital</th>
                        <td>Console-based Hospital. Generates Hospital staff, patients, along with randomized names.</td>
                        <td>NodeJS, Javascript (ES6), readline-sync, https (REST call to name-generator)</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/high-street-hospital">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>Fortune Teller</th>
                        <td>Answer a series of questions and get your fortune read! The results are not always crystal clear.</td>
                        <td>NodeJS, Javascript (ES6), readline-sync</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/fortune-teller">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>Guessing Game</th>
                        <td>You get 3 tries to guess a number 1-10, if you don't guess the correct number in 3 tries you lose!</td>
                        <td>NodeJS, Javascript (ES6), readline-sync</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/guessing-game">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>Move Mac Screenshots</th>
                        <td>Script which moves my MacOS Desktop screenshots to a screenshot folder.</td>
                        <td>Python</td>
                        <td><a href="https://github.com/bnwilson/projects/tree/master/move-mac-screenshots">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>Blackjack</th>
                        <td>Just a simple game of Blackjack, starting with 300 chips.</td>
                        <td>Javascript, html/css</td>
                        <td><a href="https://bnwilson.github.io/blackjack-blackjack">Github Link</a></td>
                    </tr>
                    <tr className="project-table__row">
                        <th>Blog site</th>
                        <td>Create a user, choose your avatar, create posts and view others'.</td>
                        <td>NodeJS, ExpressJS, sequelize, handlebars, MVC, MySQL, html/css</td>
                        <td><a href="https://github.com/WeCanCodeIT/blog-mastery-brad-richard">Github Link</a></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Projects;