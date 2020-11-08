import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ServerListScreen from './screens/ServerListScreen';
import PrivateRoute from './PrivateRoute';

import './App.scss';

function App() {
    return (
        <Router>
            <Route path='/' component={LoginScreen} exact />
            <PrivateRoute path='/servers' component={ServerListScreen} />
        </Router>
    );
}

export default App;
