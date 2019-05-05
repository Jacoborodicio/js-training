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
            countedNames: null,
            people: [
            { name: 'Alice', age: 41 },
            { name: 'Max', age: 24 },
            { name: 'Jane', age: 34},
            { name: 'Marie', age: 26},
            { name: 'Marta', age: 26}
          ],
          orderedPeople: {},
          // friends - an array of objects 
// where object field "books" - list of favorite books 
            friends: [
                {
                name: 'Anna',
                books: ['Bible', 'Harry Potter'],
                age: 21
                }, 
                {
                name: 'Bob',
                books: ['War and peace', 'Romeo and Juliet'],
                age: 26
                }, 
                {
                name: 'Alice',
                books: ['The Lord of the Rings', 'The Shining'],
                age: 18
                }
            ],
            arryWithDuplicates: ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'],
            arryWithoutDuplis: [],
        };
          
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

/**
 * Función de agrupación por una determinada propiedad de un array de objetos
 * a través de reduce
 */
groupBy = (objectArray, property) => {

    const ordObjectArray =  objectArray.reduce((acc, obj) => {
        let key = obj[property];
        if(!acc[key]){
            acc[key] = [];
        }

        acc[key].push(obj);
        return acc;
    }, {});
    console.log(ordObjectArray)
    this.setState({orderedPeople: ordObjectArray});
}


showPersons = obj => {
    let toRender = '';
    for(let item in obj) {
        // console.log(item);
        // console.log(obj[item])
        toRender += obj[item].map(item => {
            return `${item.name} con ${item.age} de edad. `;
        })
    }
    console.log(toRender);
    return toRender;
}

    obtainNestedElems = (arryObjs, keyNestedArry) => {
        const aux =  arryObjs.reduce((acc, val) => {
            return [...acc, ...val[keyNestedArry]];
        // },[]);
        }, ["Ejemplo de primer elemento por defecto", "o de muchos xD"]);
        console.log("Nested arry.. : ", aux);
        return aux;
    }

    removeDuplisReduce = arryDup => {
        // Index of devuelve -1 si no se encuentra en la cadena el valor especificado
        let result = [];
        result = arryDup.reduce((acc, val) => {
            if(acc.indexOf(val) === -1){
                acc.push(val);
            }
            return acc;
        }, []);
        this.setState({arryWithoutDuplis: result});
    }

    removeDuplisSet = arryDuo => {
        let result = Array.from(new Set(arryDuo));
        this.setState({arryWithoutDuplis: result});
    }

render() {
        
        let output = '';
        for(let item in this.state.countedNames) {
            output += item + ' ' + this.state.countedNames[item] + ' veces. ';
        }
        return (
            <div style={{padding: '2rem', backgroundColor: '#f5f5f5'}}>
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
            <hr/>
            <div>
                <p>
                    {this.state.people.map(person => ' ' + person.name + ' de ' + person.age + ' ')}
                </p>
                <button onClick={() => this.groupBy(this.state.people, "name")}>Order by name!</button>
                <button onClick={() => this.groupBy(this.state.people, "age")}>Order by age!</button>
                <p>
                    {this.showPersons(this.state.orderedPeople)}
                </p>
            </div>
            <div>
                <button onClick={() => this.obtainNestedElems(this.state.friends, 'books')} >Obtener array embedido. Mirar console</button>
            </div>
            <div>
                <p>Array antiguo:</p>
                {
                    this.state.arryWithDuplicates.map(item => item + ' ')
                }
                <button onClick={() => this.removeDuplisReduce(this.state.arryWithDuplicates)} >Remover duplicados con remove</button>
                <button onClick={() => this.removeDuplisSet(this.state.arryWithDuplicates)} >Remover duplicados con Array.from(new Set(arry))</button>
                <p>Array nuevo:</p>
                {
                    this.state.arryWithoutDuplis.map(item => item + ' ')
                }
            </div>
            </div>
        );
    }
}