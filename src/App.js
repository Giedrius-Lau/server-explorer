import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ServerListScreen from './screens/ServerListScreen';

import './App.scss';

function App() {
    return (
        <Router>
            <Route path='/login' component={LoginScreen} exact />
            <Route path='/' component={ServerListScreen} />
            Start
        </Router>
    );
}

export default App;
