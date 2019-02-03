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
            arrayMultidimensional: [
                [0, 1],
                [2, 3],
                [4, 5],
            ],
            flattenedArray: null,
            objArryNew: null,
            names: ['Ali', 'Jaco', 'Peter', 'Susi', 'Ali', 'Ali', 'Susi', 'Marta', 'Jaco', 'Peter', 'Jaco', 'Jaco'],
            countedNames: null
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

/**
 * "Aplanar" arrays, i.e. quitar dimensiones. Es necesario explorar casos como 
 * aquellos en los que nos podemos encontrar valores nulos o indefinidos así como 
 * aquellos en los que pueden existir elementos repetidos y queremos o no evitarlos.
 */
flattenArray = arry => {
    const flattened = arry.reduce((acu, cv) => {
        console.log("ACU: ", acu);
        console.log("CV: ", cv);
        return acu.concat(cv);
    },[])
    this.setState({flattenedArray: flattened});
}

countingNames = arry => {
    const countedN = arry.reduce((acu, cv) => {
        if(cv in acu){
            acu[cv]++;
        }else {
            acu[cv] = 1;
        }
        return acu;
    }, {})
    this.setState({countedNames: countedN});
}

render() {
        
        let output = '';
        for(let item in this.state.countedNames) {
            output += item + ' ' + this.state.countedNames[item] + ' veces. ';
        }
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
            <br/>
            <p>{
                this.state.arrayMultidimensional.map(arry => arry).map(item => item)
            }</p>
            <p>{
                this.state.flattenedArray && this.state.flattenedArray.map(item => item + ' ')
            }</p>
            <button onClick={() => this.flattenArray(this.state.arrayMultidimensional)}>Flatte it!</button>
            <br/>
            <p>
                {this.state.names.map(name => name + ' ')}
            </p>
            {
                this.state.countedNames && <p>{output}</p>
            }
            <button onClick={() => this.countingNames(this.state.names)}>Count them!</button>
            </div>
        );
    }
}