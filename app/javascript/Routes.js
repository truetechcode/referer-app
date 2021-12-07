// app/javascript/Routes.js
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import App from './App';
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Login from './bundles/Login/components/Login';
import Register from './bundles/Register/components/Register';

export default (props) => {
    return (
        <Router>
            <App />
            <Routes>
                <Route exact path="/" element={<HelloWorld name={props.name} />} />
                <Route exact path="/login" element={<Login name={props.name} />} />
                <Route exact path="/register" element={<Register name={props.name} />} />
            </Routes>
        </Router>
    );
}