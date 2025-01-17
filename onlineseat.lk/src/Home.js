import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import fire from './config/Fire';


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    } 

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="col-md-6">
                <h1>You are home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Home;