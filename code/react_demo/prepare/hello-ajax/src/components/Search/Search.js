import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    search(){
        let searchName = this.refs.searchName.value;
        //判断用户输入的信息是否为空
        if(!searchName){
            alert('信息不能为空');
            return
        }
        this.props.search(searchName);
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref="searchName" type="text" placeholder="enter the name you search"/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
export default Search