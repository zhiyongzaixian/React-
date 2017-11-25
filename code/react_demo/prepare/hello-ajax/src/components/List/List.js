import React from 'react';
import axios from 'axios';

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstView : true,
            loading : false,
            users : null,
            error : null
        }
    }


    componentWillReceiveProps(nextProps){
        console.log(nextProps);//对象，
        //修改状态为loading..
        this.setState({
            firstView:false,
            loading : true
        });
        let searchName = nextProps.searchName;
        //发送ajax请求获取用户数据列表
        let url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
            .then((response) => {
                console.log(response);
                let users = response.data.items;
                //修改users状态
                this.setState({
                    users : users,
                    loading : false
                })
            })
            .catch((error) => {
                console.log(error.message);
                this.setState({
                    error : error,
                    loading : false
                })
            })
    }
    render(){
        let {firstView, loading, users, error} = this.state;
        if(firstView){
            return <p>Enter name to search</p>
        }else if(loading){
            return <p>loading.....</p>
        }else if(users){
            return (
                <div className="row">
                    {
                        users.map( (user, index) => {
                            return (
                                <div className="card" key={index}>
                                    <a href={user.html_url} target="_blank">
                                        <img src={user.avatar_url} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{user.login}</p>
                                </div>
                            )
                        })
                    }

                </div>
            )
        }else{
            alert(error);
        }
    }
}
export default List