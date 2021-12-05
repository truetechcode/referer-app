// app/javascript/Routes.js
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import App from './App';

export default (props) => {
    return (
        <Router>
            <App />
            <Routes>
                <Route exact path="/" element={<HelloWorld name={props.name} />} />
                <Route exact path="/login" element={<HelloWorld name={props.name} />} />
                <Route exact path="/register" element={<HelloWorld name={props.name} />} />
            </Routes>
        </Router>
    );
}