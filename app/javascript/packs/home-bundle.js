import ReactOnRails from 'react-on-rails';

import App from '../App';
import Routes from '../Routes';
import Home from '../bundles/home/components/Home.js';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
    App,
    Routes,
    Home,
});