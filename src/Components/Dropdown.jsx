import React from 'react';
import '../styles/styles.css';
import MainContent from './MainContent';

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
                        <li><a className="active" onClick={handleClick} value="about" href="/about" >About Me</a></li>
                        <li><a className="active" onClick={handleClick} value="projects" href="/" >My Projects</a></li>
                        <li><a className="active" onClick={handleClick} value="contact" href="/contact">Contact Me</a></li>
                        <li><a className="active" onClick={handleClick} value="experience" href="/experience">My Experience</a></li>
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

const handleClick = event => {
    MainContent({key: event.target.value}) 
}

export default Dropdown;