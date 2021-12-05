// app/javascript/App.js
import React from 'react';
import {
    Link
} from "react-router-dom";

export default class App extends React.Component {
    render() {
        console.log('app being mounted');
        return (
            <>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="login">Login</Link>
                        </li>
                        <li>
                            <Link to="register">Register</Link>
                        </li>
                    </ul>
                    <hr />
                </div>
            </>
        );
    }
}