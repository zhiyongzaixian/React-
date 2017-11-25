import React from 'react';
class Add extends React.Component {
  constructor(props) {
    super(props);
  }
  // 定义添加评论的方法
  addComment = () => {
    // 收集数据
    let username = this.refs.username.value;
    let comment = this.refs.comment.value;
    // 判断用户输入的内是否合法
    if(!username || !comment){
      alert('输入的内容必须完整');
      return;
    }
    // 整理数据
    let obj = {
      username, comment
    };
    // 将数据交给App组件
    this.props.add(obj);
    // 清空用户输入的数据
    this.refs.username.value = '';
    this.refs.comment.value = '';
  };
  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref="username" type="text" className="form-control" placeholder="用户名" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref="comment" className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.addComment} type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;