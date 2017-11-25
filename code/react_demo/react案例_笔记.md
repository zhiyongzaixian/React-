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

## 组件化项目编码的基本流程
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
    * componentWillReceiveProps(nextProps): 监视接收到新的props, 发送ajax
    * 使用axios库发送ajax请求