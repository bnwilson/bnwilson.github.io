import React from 'react';
import '../styles/styles.css';

/**
 * `Dropdown` - _class_ - class-based attempt at creating a dropdown menu for nav
 * @class
 * @constructor `props`
 * 
 */
export class Dropdown extends React.Component {
    // props: 
    //    'title'       <string>   -> title of default selection; defaults to '-- Selection --'
    //    'navCallback' <function> -> callback to handle click event for each item in dropdown
    //    'items'       <array>    -> array of objects with valies of each click; properties: 'value', 'name'

    constructor(props) {
        super(props);

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
                    {this.props.title ? this.props.title : " -- Selection --"}
                </div>
                { this.state.displayMenu ? (
                    <ul>
                        {this.props.items && this.props.items.map((item, index) => (
                            <li>
                                <a className="active" 
                                key={index}
                                onClick={this.props.navCallback} 
                                value="about" 
                                href="/about" >About Me
                                </a>
                            </li>
                        ))}
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