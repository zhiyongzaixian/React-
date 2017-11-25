import React from 'react';
import Search from '../Search/Search';
import List from '../List/List';
class App extends React.Component{
    constructor(props){
        super(props);
        //初始化状态
        this.state = {
            searchName : ''
        };
        this.search = this.search.bind(this);
    }
    search(searchName){
        this.setState({searchName});
    }
    render(){
        return (
            <div className="container">
                <Search search={this.search}/>
                <List searchName={this.state.searchName}/>
            </div>
        )
    }
}
export default App