import React from 'react';
import {Link} from 'react-router'

class App extends React.Component{
    render(){
        return (
            <div>
                <h2>Hello, React Router!</h2>
                <ul>
                    <li><Link activeClassName='active' to="/about">about</Link></li>
                    <li><Link activeClassName='active' to="/repos">repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App;