import React, {Component} from 'react';

 export default class ReduceMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5],
            listReduc: null,
            objArry: [
                {x: 1},
                {x: 2},
                {x: 3},
                {x: 4},
            ],
            objArryNew: null
        }
    }

sumElements = (lista) => {
    const listaReduc = lista.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);

    this.setState({listReduc: listaReduc})
};

sumElemNotClear = () => this.setState({listReduc: this.state.list.reduce((ac, cu) => ac + cu)}, 
        () => console.log("DEMO: ", this.state.listReduc));


/** Cuidado cuando 'jugamos' con objetos porque entonces sí necesitamos un 
 * valor por defecto -> initialValue, sino la primera iteración, ejecución de la callback
 * la tomará como la suma entre un objeto y el valor de x para el primer elemento, lo que lógicamente
 * no funciona. Por eso necesitamos ese primer elemento aunque sea cero.
 */
sumElemObj = obj => {
    const sum = obj.reduce((acu, cval) => {
    return acu + cval.x
    }, 0)
    this.setState({objArryNew: sum});
}
 
    render() {

        return (
            <div>
            {
                this.state.list.map(item => item + ' ')
            }
            <p>{this.state.listReduc}</p>
            <button onClick={() => this.sumElements(this.state.list)}>Suma elementos!</button>
            <button onClick={this.sumElemNotClear}>Suma interna</button>
            <hr/>
            <p>{
                this.state.objArry.map(it => it.x + ' ')
            }</p>
            <p>{this.state.objArryNew}</p>
            <button onClick={() => this.sumElemObj(this.state.objArry)}>Suma X!</button>
            </div>
        );
    }
}