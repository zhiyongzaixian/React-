import React, {Component} from 'react'
import {Link} from 'react-router';

export default class Repos extends Component {
    constructor(props){
        super(props);
        this.state = {
            repos : []
        }
    }
    componentDidMount(){
        let repos = [
            {name : 'facebook', repo : 'yarn'},
            {name : 'facebook', repo : 'react'},
            {name : 'google', repo : 'angular'},
            {name : 'antd', repo : 'antd'},
        ];
        this.setState({repos});
    }
    render() {
        return (
            <div>
                <h3>Repos 组件</h3>
                <ul>
                    {
                        this.state.repos.map((item, index) => {
                            return <li key={index}><Link activeClassName='haha' to={`/repos/${item.name}/${item.repo}`}>{item.repo}</Link></li>
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}