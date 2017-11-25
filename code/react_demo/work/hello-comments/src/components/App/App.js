import React from 'react';
import Add from '../Add/Add';
import List from '../List/List';
import PubSub from 'pubsub-js';
class App extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态(数据)
    this.state = {
      comments: [
        {username: '山西人', comment: '我们有煤矿'},
        {username: '雄安人', comment: '我在雄安有两亩地'}
      ]
    };
  }
  componentWillMount(){
    PubSub.subscribe('message',  (msg, data) => {
      console.log(msg, data);
      let comments = this.state.comments;
      comments.splice(data, 1);
      this.setState({comments});
    })
  };
  // 定义添加的方法
  add = (comment) => {
    // console.log(comment);
    // 更新数据  状态
    let comments = this.state.comments;
    comments.unshift(comment);
    this.setState({comments});
  };
  // 定义删除的方法
  del = (index) => {
    console.log(index);
    // 更新状态
    let comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({comments});
  };
  render () {
    let {comments} = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add add={this.add}/>
          <List comments={comments} del={this.del}/>
        </div>
      </div>
    );
  }
}

export default App;