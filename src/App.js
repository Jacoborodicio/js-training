import React, { Component } from 'react';
import './App.css';
import data from './data/arrayObjectsDummy';


// TODO: Comenzar con setState y props in depth
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'demo',
      data: data,
      allFriends: []
    };
  }  

  extractFriendsItemByIndex = indexItem => {
    const value = this.state.data[indexItem]["friends"].map((item, index) => {
      return <p key={index}>{item.name}</p>;
    });
    // console.log(value);
    return value; 
  }

  componentDidMount() {
    console.log(this.state.name);
    this.extractAllFriends();  
    console.log(this.state.name);
  }
  extractAllFriends = () => {
    //  const friends =  this.state.data.map(item => {
    //    console.log(item.friends);
    //   return item.friends;

    // });
    // console.log("Friends: ",friends)
    this.setState({name: 'jacobo'})}

  render() {
    const friends = this.extractFriendsItemByIndex(3);
    // const allFriends = this.state.allFriends.friends.map(friend => <p>{friend}</p>)
    // const allFriends = this.state.allFriends[0]
    return (
      <div className="App">
       {friends}
       <hr/>
       {/* {allFriends} */}
      </div>
    );
  }
}

export default App;
