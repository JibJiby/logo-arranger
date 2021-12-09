import IndexPage from '@pages/index';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={IndexPage} />
        </Switch>
    );
}

export default App;
