## 使用React脚手架创建一个React应用
* react脚手架
  * xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的空项目的库
    * 包含了所有需要的配置
    * 指定好了所有的依赖
    * 可以直接安装/编译/运行一个简单效果
  * react提供了一个专门用于创建react项目的脚手架库: create-react-app
  * 项目的整体技术架构为: react + webpack + es6 + eslint
  
* 创建项目并启动
  * npm install -g create-react-app
  * create-react-app hello-react
  * cd hello-react
  * npm start
  
## app1: 实现一个评论管理功能
* 拆分组件:
  * 应用组件: App
  * 添加评论组件: CommentAdd
  * 评论项组件: CommentItem
  * 评论列表组件: CommentList
* 确定组件的state和props:
  * App: 
    * state: comments/array
  * CommentAdd
    * state: username/string, content/string
    * props: add/func
  * commentList
      * props: comments/array, delete/func
  * CommentItem
    * props: comment/object, delete/func, index/number
  
* 编写静态组件
  * 拆分页面
  * 拆分css
* 实现动态组件
  * 动态展示初始化数据
	  * 初始化状态数据
	  * 传递属性数据
  * 响应用户操作, 更新组件界面
	  * 绑定事件监听, 并处理
	  * 更新state

## app2: 实现github用户搜索功能
  * 拆分组件
    * App
    * Search
    * List
  * 确定组件的state和props
    * App
      * state: searchName/string
    * Search
      * props: setSearchName/func
    * List
      * props: searchName/string
      * state: firstView/bool, loading/bool, users/array, errMsg/string
  * 编写静态组件
  * 编写动态组件
    * componentWillReceiveProps(nextProps): 
      * nextProps为当前组件最新的props对象
      * 监视接收到新的props, 发送ajax
    * 使用axios库发送ajax请求

## 组件间通信总结
  * 方式一: 通过props传递
    * 共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
    * 通过props可以传递一般数据和函数数据, 只能一层一层传递
    * 一般数据-->父组件传递数据给子组件-->子组件读取数据
    * 函数数据-->子组件传递数据给父组件-->子组件调用函数
  * 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制
    * 工具库: PubSubJS
    * 下载: npm install pubsub-js --save
    * 使用: 
      
        import PubSub from 'pubsub-js' //引入

        PubSub.subscribe('delete', function(data){ }); //订阅

        PubSub.publish('delete', data) //发布消息
      
      
## ES6新语法
  * const/let
  * 解构赋值: let {a, b} = this.props
  * 对象的简洁表达
  * 箭头函数: 
     * 组件的自定义方法: xxx = () => {}
     * map/filter的回调方法: (item, index) => {}
     * 优点:
      * 简洁
      * 没有自己的this,使用引用this查找的是外部this
  * 扩展运算符(...)
    * 解构对象:  
      * const MyProps = {}
      *  <Xxx {...MyProps}>
  * class/extends/constructor/super
  * ES6模块化(Babel)

## 项目打包运行
  * 项目编译打包并运行
    * npm build
    * npm install -g pushstate-server
    * pushstate-server build
    * 访问: http://localhost:9000
