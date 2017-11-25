import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App/App';
import About from './components/About/About';
import Repos from './components/Repos/Repos';
import Home from './components/Home/Home';
import Repo from './components/Repo/Repo';

import './index.css';

ReactDOM.render(
    (
        <Router history={hashHistory}>

            <Route path="/" component={App}>

                <IndexRoute component={Home}></IndexRoute>
                <Router path="/about" component={About}></Router>
                <Router path="/repos" component={Repos}>
                    <Route path="/repos/:name/:repo" component={Repo}></Route>
                </Router>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);