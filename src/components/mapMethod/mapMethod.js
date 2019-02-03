import React, {Component, Fragment} from 'react';

class MapMethod extends Component {

    state = {
        numbers: [1, 4, 9],
        numbersNew: [],
        kvArray: [
            {key: 1, value: 10}, 
            {key: 2, value: 20}, 
            {key: 3, value: 30}
            ],
        rArray: [],
        numbersStr: [ '1', '1.1', '2.2e2', '3e300'],
        numbersParsed: [],
        showInfoReformatted: false,
    }

    squareHandler = arryNums => {
        const numbersNew = arryNums.map(num => {
            return Math.sqrt(num);
        });

        this.setState({
            numbersNew: numbersNew
        }, () => console.log('[mapMethod.js]:squareHandler -> this.state.numbersNew = ', this.state.numbersNew));
    }

    reformattedArrayHandler = kvArray => {
        const reformattedArray = kvArray.map(item => {
            const rObj = {};
            rObj[item.key] = item.value;
            return rObj;
        })
        this.setState({
            showInfoReformatted: true,
            rArray: reformattedArray
        }, () => {
            console.log('[mapMethod.js]:reformattedArrayHandler -> this.state.rArray = ', this.state.rArray)
            console.log('[mapMethod.js]:reformattedArrayHandler -> this.state.kvArray = ', this.state.kvArray)
            });
    }


    parseToNumber = numberStr => {
        const numsParsed = numberStr.map(Number);
        this.setState({
            numbersParsed: numsParsed
        }, () => {
            const typeNum = typeof this.state.numbersParsed[3];
            console.log('[mapMethod.js]:parseToNumber -> this.state.numbersParsed = ', this.state.numbersParsed);
            console.log('[mapMethod.js]:parseToNumber -> this.state.numbersParsed[3] with value 3e+300 and typeof = ', typeNum);            
        });
    };

    render() {
        return (
            <Fragment>
                <p>{this.state.numbersNew}</p>
                <button onClick={() => this.squareHandler(this.state.numbers)}>Square</button>
                <button onClick={() => this.reformattedArrayHandler(this.state.kvArray)}>Reformate array</button>
                {
                    this.state.showInfoReformatted && <p>Please, open the console to see output :)</p>
                }

                <br/>
                <p>{this.state.numbersParsed}</p>
                <button onClick={() => this.parseToNumber(this.state.numbersStr)}>Parse to numbers!</button>
            </Fragment>
        );
    }
}
export default MapMethod;