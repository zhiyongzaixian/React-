import React from 'react';
import axios from 'axios';

class List extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      firstView: true,
      loading: false,
      users: null,
      error: null
    };
  }
  // 组件将要接收props,或者接收的props数据发生改变的时候
  componentWillReceiveProps(nextProps){
    console.log(nextProps);// 收集最新传过来的props对象
    // 更新状态
    this.setState({
      firstView: false,
      loading: true
    });

    // 发送ajax请求获取对应的数据
    let url = `https://api.github.com/search/users?q=${nextProps.searchName}`;
    axios.get(url)
      .then(response => {
        let data = response.data.items;
        // 更新状态
        this.setState({
          loading: false,
          users: data
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      })
  }
  render () {
    let {firstView, loading, users, error} = this.state;
    if(firstView){
      return <p>enter name to search</p>
    }else if(loading){
      return <p>loading...</p>
    }else if(users){
      return (
        <div>
          {
            users.map((user, index) => {
              return (
                <div key={index} className="card">
                  <a href={user.html_url} target="_blank">
                    <img src={user.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              )
            })
          }
        </div>
      );
    }else {
      return <p>暂时没有匹配到用户。。。</p>
    }

  }
}


export default List;