import React, {Component} from 'react';

class WorkingWithObjects extends Component {
    state = {
        myObject: {
            str: 'Random string',
            randomNumber: Math.random(),
            obj: {
                1: 'primero',
                2: 'segundo',
                3: 'tercero'
            }
        },
        coche: {
            nombre: "MiCoche",
            marca: 'Mercedes',
            modelo: 'C220 Turbo',
            personalizacion: 'AMG',
            precio: 50000,
            año: 2019
        },
        properties: [],
    }

    componentDidMount() {
        
    }

    formatOutput = (obj, objName) => {
        let output = '';
        for (let prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                output += objName + '.' + prop + ': ' + obj[prop] + ', ';
            }
        }
        return output;
    }

    showPropsFI = obj => {
        let keys = [];
        for(let prop in obj) {
            keys.push(prop);
        }
        this.setState({properties: keys})
    }

    showPropsOK = obj => {
        this.setState({properties : Object.keys(obj)});
    }

    showPropsGOPN = obj => {
        this.setState({properties: Object.getOwnPropertyNames(obj)});
    }

    render() {

        return (
            <>
                <p>WorkingWithObjects</p>
                <p>{this.state.myObject.str}</p>
                <p>{this.state.myObject.randomNumber}</p>
                <p>{this.state.myObject.obj["1"]}</p>
                {/* <p>{this.state.myObject.obj.1}</p> No se puede acceder por NOTACIÓN DE PUNTO */}
                <h3>Formateando objeto interno, viendo esquema:</h3>
                {this.formatOutput(this.state.coche, 'coche')}

                <hr/>
                <h3>Listando propiedades:</h3>
                <button onClick={() => this.showPropsFI(this.state)}>for..in</button>
                <button onClick={() => this.showPropsOK(this.state.myObject)}>Object.keys(obj)</button>
                <button onClick={() => this.showPropsGOPN(this.state.coche)}>Object.getOwnPropertyNames(obj)</button>
                <br/>
                {
                    this.state.properties.map(item => item + ' ')
                }
            </>
        );
    }
}

export default WorkingWithObjects;