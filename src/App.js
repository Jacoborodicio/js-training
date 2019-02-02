import React, { Component } from 'react';
import './App.css';
import data from './data/arrayObjectsDummy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }  

  extractFriendsItemByIndex = indexItem => {
    const value = this.state.data[indexItem]["friends"].map((item, index) => {
      return <p key={index}>{item.name}</p>;
    });
    console.log(value);
    return value; 
  }

  render() {
    const friends = this.extractFriendsItemByIndex(3);

    return (
      <div className="App">
       {friends}
      </div>
    );
  }
}

export default App;
