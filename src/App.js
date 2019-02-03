import React, { Component } from 'react';
import './App.css';
import data from './data/arrayObjectsDummy';
import Users from './components/users/users';

// TODO: Comenzar con setState y props in depth
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      allFriends: null
    };
  }  

  extractFriendsItemByIndex = indexItem => {
    const value = this.state.data[indexItem]["friends"].map((item, index) => {
      return <p key={index}>{item.name}</p>;
    });
    return value; 
  }

  componentWillMount() {
    // this.extractAllFriends();
  }

  extractAllFriends = () => {
     const friends =  this.state.data.map(item => {
      return item.friends
    })
      .map(obj => {
      let names = '';
      obj.forEach(it => {
        console.log(it.name)
        names += it.name + ' '
      });
      console.log("NAMES: ", names);
      return names;
    });
    
    console.log(friends);
    this.setState((prevState, props) => {
      return {allFriends: 'friends'}
    }, console.log("STATE: ",this.state.allFriends))

  }
  render() {
    // const friends = this.extractFriendsItemByIndex(3);
    // const allFriends = this.state.allFriends.friends.map(friend => <p>{friend}</p>)
    // const allFriends = this.state.allFriends[0]
    return (
      <div className="App">
       {/* {friends} */}
       <Users />
       {/* {allFriends} */}
      </div>
    );
  }
}

export default App;
