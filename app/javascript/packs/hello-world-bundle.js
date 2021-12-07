import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import Login from '../bundles/Login/components/Login';
import Register from '../bundles/Register/components/Register';
import Routes from '../Routes';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Routes,
  HelloWorld,
  Login,
  Register
});