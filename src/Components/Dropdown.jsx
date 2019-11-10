import React from 'react';
import '../styles/styles.css';

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false
        }
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    };

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    };

    render() {
        return (
            <div 
            className="header__navbar-dropdown"
            style= {{ background: "red", width: "200px" }}
            >
                <div
                className="header__navbar-button" 
                onClick={this.showDropdownMenu}
                >
                    Home
                </div>
                { this.state.displayMenu ? (
                    <ul>
                        <li><a className="active" href="/about">About Me</a></li>
                        <li><a className="active" href="/projects">My Projects</a></li>
                        <li><a className="active" href="/contact">Contact Me</a></li>
                        <li><a className="active" href="/experience">My Experience</a></li>
                    </ul>
                ):
                (
                    null
                )
            }
            </div>
        )
    }
}

export default Dropdown;