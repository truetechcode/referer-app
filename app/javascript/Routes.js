// app/javascript/Routes.js
import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from './bundles/Home/components/Home';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <h3>Root Path Component</h3>
            </Route>
            <Route path="/login">
                <h3>Login Component</h3>
            </Route>
            <Route path="/register">
                <h3>Registration Component</h3>
            </Route>
        </Switch>
    );
}