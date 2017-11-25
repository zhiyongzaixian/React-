# 使用开源的ant-design库开发项目指南

## 1. 最流行的开源React UI组件库
* material-ui(国外)
  * 官网: http://www.material-ui.com/#/
  * github: https://github.com/callemall/material-ui
* ant-design(国内蚂蚁金服)
  * 官网: https://ant.design/
  * github: https://github.com/ant-design/ant-design/

## 2. ant-design使用入门
* 使用create-react-app搭建react开发环境
  ```
  npm install create-react-app -g
  create-react-app antd-demo
  cd antd-demo
  npm start
  ```
* 搭建antd的基本开发环境
  * 下载
    ```
    npm install antd --save
    ```
  * src/App.js
    ```
    import React, { Component } from 'react';
    import { Button } from 'antd';
    import './App.css';
    
    class App extends Component {
      render() {
        return (
          <div className="App">
            <Button type="primary">Button</Button>
          </div>
        );
      }
    }
    
    export default App;
    ```
  * src/App.css
    ```
    @import '~antd/dist/antd.css';
    
    .App {
      text-align: center;
    }
    ```
* 实现按需加载(css/js)
  * 使用 eject 命令将所有内建的配置暴露出来
    ```
    npm run eject
    ```
  * 下载babel-plugin-import(用于按需加载组件代码和样式的 babel 插件)
    ```
    npm install babel-plugin-import --save-dev
    ```
  * 修改配置: config/webpack.config.dev.js
    ```
    // Process JS with Babel.
    {
       test: /\.(js|jsx)$/,
       include: paths.appSrc,
       loader: require.resolve('babel-loader'),
       options: {
         "plugins": [
           ["import", { libraryName: "antd", style: "css" }] // `style: true` 会加载 less 文件
         ],
         
         // This is a feature of `babel-loader` for webpack (not Babel itself).
         // It enables caching results in ./node_modules/.cache/babel-loader/
         // directory for faster rebuilds.
         cacheDirectory: true,
       },
    ```
  * 去除引入全量样式的语句: src/App.css
    ```
    @import '~antd/dist/antd.css'
    ```