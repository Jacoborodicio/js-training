import React, {Component} from 'react';
import User from '../user/user';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
            {name: 'Jaco', age: 30, word: "Pasión"},
            {name: 'María', age: 37, word: "Orden"},
            {name: 'Petra', age: 26, word: "Libertad"}
            ],
            title: 'Users List'
        }
    }

    changeAgesHandler = () => {
        this.setState({
            users: [
                {name: 'Jaco', age: 20, word: "Pasión"},
                {name: 'María', age: 47, word: "Orden"},
                {name: 'Petra', age: 21, word: "Libertad"}
                ]
    }, () => console.log("Edad nueva: 20, edad en el log CALLBACK -> ", this.state.users[0].age)); // CALLBACK, no log a secas, lo que sea, pero en callback!
        /** Utilizando la linea anterior, la callback del método setState, nos aseguramos de que en ese momento
         * el state está totalmente actualizado. SIN EMBARGO, utilizando dichas callbacks forzamos rendering 
         * aunque tengamos implementado el método shouldUpdate o aunque sea un PureComponent, así que en caso
         * de uso y ver lags o algo, SE DEBERÁ a que nos estamos saltando la restrinción, la función de ese shouldUpdate
         * y de PureCompoent también, por lo que podemos estar provocando renderizaciones de más!!!!
         */


        // Vemos que esta línea posee en la mayoría de los casos aún el viejo valor, ya que setState es async, 
        // se observa también como este console log se ejecuta antes de la callback!!!!
        console.log("Edad nueva: 20, edad en el log-> ", this.state.users[0].age);
    }

    newUsersState = () => {
        const newState = this.state.users.map( user => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({
            newState
        })
    }
    render () {
        return(
            <>
            <div>
                <h1>{this.state.title}</h1>
                <User age={this.state.users[0].age} name={this.state.users[0].name}>{this.state.users[0].word}</User>
                <User age={this.state.users[1].age} name={this.state.users[1].name}>{this.state.users[1].word}</User>
                <User age={this.state.users[2].age} name={this.state.users[2].name}>{this.state.users[2].word}</User>
                <hr/>
                <button onClick={this.changeAgesHandler}>Change Ages!</button>
            </div>

            <div>
                <h1>Un poco más de sentido...</h1>
                {
                    this.state.users.map((user, index) => {
                        return <User key={index} age={user.age} name={user.name}>{user.word}</User>
                    })
                }
                <button onClick={this.newUsersState}>
                    Diez años menos por click actualizando state a partir de salida del map

                </button>
            </div>

            </>
        );
    }
}

export default Users; 