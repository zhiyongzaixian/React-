import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';

import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Home from './components/Home';
import Repo from './components/Repo';

import './index.css';

/*
* 1、生成路由器: Router
* 2、注册路由： Route  path='路由路径'  component={组件}
* 3、当请求的路由路径不确定的时候，注册路由的时候应该使用占位符
*
*
*
* */

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='/about' component={About}></Route>
        <Route path='/repos' component={Repos}>
          <Route path='/repos/:xxx/:repo' component={Repo}></Route>
        </Route>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
