// app/javascript/Routes.js
import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import Home from './bundles/home/components/Home.js';

export default () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <h3>Login Component</h3>
                </Route>
                <Route path="/register">
                    <h3>Registration Component</h3>
                </Route>
            </Routes>
        </Router>
    );
}