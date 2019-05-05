import React, { Component } from 'react';
import './App.css';
import data from './data/arrayObjectsDummy';
import Users from './components/users/users';

import MapMethod from './components/mapMethod/mapMethod';
import ReduceMethod from './components/reduceMethod/reduceMethod';
import WorkingWithObjects from './components/workingWithObjects/workingWithObjects';
// TODO: Comenzar con setState y props in depth
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      allFriends: null,
      name: 'Jacobo'
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

  changeNameHardHandler = () => {
    this.setState({
      name: 'Awesome!'
    })
  }

  changeNameParamHandler = newName => {
    this.setState({
      name: newName
    })
  }

  changeNameEventHandler = event => {
    this.setState ({
      name: event.target.value
    })
  }

  render() {
    // const friends = this.extractFriendsItemByIndex(3);
    // const allFriends = this.state.allFriends.friends.map(friend => <p>{friend}</p>)
    // const allFriends = this.state.allFriends[0]
    return (
      <div className="App">
       {/* {friends} */}
       {/* {allFriends} */}
       {/* <Users />
       <hr/>
       <div>
         {this.state.name}
         <br/>
         <button onClick={this.changeNameHardHandler} >Change state! (name) HARDCODING</button><br/>
         <button onClick={() => this.changeNameParamHandler('Cambiado mediante anonimous function. Sigue sin ser ejecutada directamente ya que lo que se devuelve es la función anónima en sí, por lo que se ejecuta en contexto, al clicar el botón :)')} >Change state! (name) PARAMS</button><br/>
         <button onClick={this.changeNameParamHandler.bind(this, 'Cambiado mediante .bind(this, ...) sin uso de anom funct')} >Change state! (name) BIND</button><br/>
         <input type="text" onChange={this.changeNameEventHandler } value={this.state.name}/>
       </div>
       <hr/><br/>
        <MapMethod />
        <hr/><br/>
        <ReduceMethod /> */}

        <WorkingWithObjects />
      </div>
    );
  }
}

export default App;
