# react-router使用教程
0. 关于url中#的作用:
  * 学习: http://www.ruanyifeng.com/blog/2011/03/url_hash.html
  * '#'代表网页中的一个位置。其右面的字符，就是该位置的标识符
  * 改变#不触发网页重载
  * 改变#会改变浏览器的访问历史
  * window.location.hash读取#值
  * window.onhashchange = func 监听hash改变
1. react-router
  * github主页: https://github.com/ReactTraining/react-router
  * 官网教程: https://github.com/reactjs/react-router-tutorial/(官方教程)
  * 一峰教程: http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
2. react-router库中的 相关组件
  * 包含的相关组件: 
    * Router: 路由器组件, 用来包含各个路由组件,用来管理路由
    * Route: 路由组件, 注册路由 
    * IndexRoute: 默认路由组件
    * hashHistory: 路由的切换由URL的hash变化决定，即URL的#部分发生变化
    * Link: 路由链接组件，生成a标签的
  * Router: 路由器组件
    * 属性:  history={hashHistory} 用来监听浏览器地址栏的变化, 并将URL解析成一个地址对象，供React Router匹配
    * 子组件: Route
  * Route: 路由组件
    * 属性1: path="/xxx"  
    * 属性2: component={Xxx}
    * 根路由组件: path="/"的组件, 一般为App
    * 子路由组件: 子<Route>配置的组件
  * IndexRoute: 默认路由
    * 当父路由被请求时, 默认就会请求此路由组件
  * hashHistory
    * 用于Router组件的history属性
    * 作用: 为地址url生成?_k=hash, 用于内部保存对应的state
  * Link: 路由链接
    * 属性1: to="/xxx"
    * 属性2: activeClassName="active"
2. 下载相关插件：
    * npm install react-router@3 --save 
3. 编码
  * 定义各个路由组件
    * About.js
      ```
      import React from 'react'
      function About() {
        return <div>About组件内容</div>
      }
      export default About
      ```
    * Home.js
      ```
      import React from 'react'
      function Home() {
        return <div>Home组件内容2</div>
      }
      export default Home
      ```
    * Repos.js
      ```
      import React, {Component} from 'react'
      import {Link} from 'react-router';
      
      export default class Repos extends Component {
          constructor(props){
              super(props);
              this.state = {
                  repos : []
              }
          }
          componentDidMount(){
              let repos = [
                  {name : 'facebook', repo : 'yarn'},
                  {name : 'facebook', repo : 'react'},
                  {name : 'google', repo : 'angular'},
                  {name : 'antd', repo : 'antd'},
              ];
              this.setState({repos});
          }
          render() {
              return (
                  <div>
                      <h3>Repos 组件</h3>
                      <ul>
                          {
                              this.state.repos.map((item, index) => {
                                  return <li key={index}><Link to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                              })
                          }
                      </ul>
                      {this.props.children}
                  </div>
              )
          }
      }
      ```
  * 定义应用组件: App.js
    ```
    import React from 'react';
    import {Link} from 'react-router'
    
    class App extends React.Component{
        render(){
            return (
                <div>
                    <h2>Hello, React Router!</h2>
                    <ul>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/repos">repos</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            )
        }
    }
    
    export default App;
    ```
  * 定义入口JS: index.js-->渲染组件
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Router, Route, hashHistory, IndexRoute} from 'react-router';
    import App from './components/App/App';
    import About from './components/About/About';
    import Repos from './components/Repos/Repos';
    import Home from './components/Home/Home';
    import Repo from './components/Repo/Repo';
    
    ReactDOM.render(
        (
            <Router history={hashHistory}>
    
                <Route path="/" component={App}>
    
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/about" component={About}></Route>
                    <Route path="/repos" component={Repos}>
                        <Route path="/repos/:name/:repo" component={Repo}></Route>
                    </Route>
                </Route>
            </Router>
        ),
        document.getElementById('root')
    );
    ```
  * 主页面: index.html
    ```
    <style>
      .active {
        color: red;
      }
    </style>
    <div id='root'></div>
    ```
5. 传递请求参数
  * repo.js: repos组件下的分路由组件
    ```
    import React from 'react';
     
     function Repo({params}) {
         return <p>用户名:{params.name}, 仓库名:{params.repo}</p>
     }
     
     export default Repo;
    ```
  * repos.js
    ```
    import React, {Component} from 'react'
    import {Link} from 'react-router';
    
    export default class Repos extends Component {
        constructor(props){
            super(props);
            this.state = {
                repos : []
            }
        }
        componentDidMount(){
            let repos = [
                {name : 'facebook', repo : 'yarn'},
                {name : 'facebook', repo : 'react'},
                {name : 'google', repo : 'angular'},
                {name : 'antd', repo : 'antd'},
            ];
            this.setState({repos});
        }
        render() {
            return (
                <div>
                    <h3>Repos 组件</h3>
                    <ul>
                        {
                            this.state.repos.map((item, index) => {
                                return <li key={index}><Link to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                            })
                        }
                    </ul>
                    {this.props.children}
                </div>
            )
        }
    }
    ```
