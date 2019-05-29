import React, { Component } from 'react';
import "../styles/Home.scss";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div className="img-header">
                <div className="search-bar-container">
                    <input type="text" className="search-bar"></input>
                </div>
            </div>
            <div className="subheader"></div>
        </div>);
    }
}

export default Home;
