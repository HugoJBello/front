import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "../styles/Navbar.scss";
import {FaSearch} from "react-icons/fa/index";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<nav>
            <a  id="logo-container">
                <img className='logo' src="https://avatars3.githubusercontent.com/u/44605526?s=200&v=4">

                </img>
            </a>
            <ul className='menu-entries'>
                <li><Link to="/perdidos">PERDIDOS</Link></li>
                <li><Link to="/encontrados">ENCONTRADOS</Link></li>
                <li><Link to="/adopta">ADOPTA</Link></li>
                <span className="search-bar-top-container">
                    <input type="text" className="search-bar-top"></input>
                    <FaSearch className="search-icon"></FaSearch>
                </span>
            </ul>
        </nav>);
    }
}

export default Navbar;
