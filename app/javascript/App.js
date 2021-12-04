// app/javascript/App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Routes from './Routes';

export default class App extends React.Component {
    render() {
        console.log('app being mounted');
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    <hr />
                </div>
                <Routes />
            </Router>
        );
    }
}