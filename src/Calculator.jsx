import React, { Component } from 'react';
import './Calculator.css';
import Display from './Display'
import Keypad from './Keypad';

class Calculator extends Component {
   state = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0','ce'],
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = () => {
    console.log('set operation');
  }

  updateDisplay = () => {
    console.log('update display');
  }

  
  render = () => {
    return (
      <div className="calculator-container" >
      <Display displayValue={this.state.displayValue} />
      <Keypad
        callOperator={this.callOperator}
        numbers={this.state.numbers}
        operators={this.state.operators}
        setOperator={this.setOperator}
        updateDisplay={this.updateDisplay}
      />
      </div>
    );
  }
}

export default Calculator;