import React from 'react';
import { Button, DatePicker } from 'antd';
// import 'antd/dist/antd.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <DatePicker />
      </div>
    );
  }
}


export default App;