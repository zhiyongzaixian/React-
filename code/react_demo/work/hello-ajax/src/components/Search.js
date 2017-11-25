import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  // 定义search 方法
  search = () => {
    // 获取用户输入的关键字
    let value = this.refs.searchName.value;
    if(!value.trim()){
      alert('请输入要搜索的内容');
      return;
    }
    // 将收集的数据交给App
    this.props.getSearchName(value);
  };
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref="searchName" type="text" placeholder="enter the name you search"/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}


export default Search;