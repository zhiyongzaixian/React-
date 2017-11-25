##1. 下载相关模块包
  * 创建package.json
  * react相关库
    ```
    npm install react react-dom --save
    ```
  * babel相关库
    ```
    npm install babel-core babel-preset-es2015 babel-preset-react --save-dev
    ```
  * webpack相关库
  
	    ```
	    npm install webpack babel-loader --save-dev
	    npm install webpack-dev-server
	    ```
##2. webpack配置文件: webpack.config.js
	  ```
	  const path = require('path'); //path内置的模块，用来设置路径。
	  	    
	  module.exports = {
	    entry: './src/main.js',   // 入口文件
	    output: {                     // 输出配置
	      filename: 'bundle.js',      // 输出文件名
	      path: path.resolve(__dirname, 'dist')   //输出文件路径配置
	    },
	     module: {
	        rules: [
	          {
	            test: /\.css$/,
	            use: [
	              'style-loader',
	              'css-loader'
	            ]
	          },
	          //babel处理js
	          {
	            test: /\.js$/,
	            exclude: /node_modules/, //排除此文件夹
	            use: [
	            'babel-loader'
	            ]
	          }
	          
	        ]
	      }    
	
	  };
	  
	  ```
##3. babel配置文件: .babelrc
	  ```
	  {
	    "presets": ["es2015", "react"]
	  }
	  ```
##4. 编码
  * src/js/App.js: 应用组件
  
	    ```
	    import React from 'react'
	    export default function App() {  //暴露组件都得使用默认暴露
	      return <h1>Hello React Client Component</h1>
	    }
	    ```
  * src/js/main.js: 入口js
  
	    ```
	    import React from 'react'
	    import ReactDOM from 'react-dom'
	    import App from './App'
	    
	    //渲染组件标签到页面元素
	    ReactDOM.render(<App />, document.getElementById('demo'))
	    ```
##5. 下载css加载器
	    ```
	    npm install style-loader css-loader --save-dev
	    
	    创建css文件  src/css/test.css
	    
	    body{
	        background : red
	    }
	    ```
##6. 配置webpack-dev-server
    ````
    devServer:{
        contentBase: './',//内置服务器动态加载页面所在的目录
    }
    ``
##7. 执行命令
    ```
    构建任务：webpack
    热加载任务： webpack-dev-server
    ```

## package.json: 添加编译/运行脚本
	  ```
	  "scripts": {
	    "start": "webpack-dev-server",
	    "build": "webpack"
	  }
	  ```
  
