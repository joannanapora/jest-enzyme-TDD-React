import React, { Component } from 'react';
import './Calculator.css';
import Display from './Display'
import Keypad from './Keypad';

class Calculator extends Component {
   state = {
    displayValue: '0',
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'c', '0','.', 'reset'],
    operators: ['+', '-', 'x', '/'],
    selectedOperator: '',
    storedValue: '',
    result: ''
  }

  callOperator = () => {
    let { displayValue, selectedOperator, storedValue } = this.state;
 
    const updateStoredValue = displayValue;
    displayValue = parseInt(displayValue, 10);
    storedValue = parseInt(storedValue, 10);

    switch (selectedOperator) {
      case '+':
        displayValue = storedValue + displayValue;
        break;
      case '-':
        displayValue = storedValue - displayValue;
        break;
      case 'x':
        displayValue = storedValue * displayValue;
        break;
      case '/':
        displayValue = storedValue / displayValue;
        break;
      default:
        displayValue = '0';
    }

    displayValue = displayValue.toString();
    selectedOperator = '';
    if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

    this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
  }

  setOperator = value => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    if (selectedOperator === '') {
      storedValue = displayValue;
      displayValue = '0';
      selectedOperator = value;
    } else {
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  }

  updateDisplay = value => {
    let { displayValue } = this.state;
    if (value === '.' && displayValue.includes('.')) {
      value = ''
    };
    if (value === 'c') {
      displayValue = displayValue.substr(0, displayValue.length - 1);
      if (displayValue === '') {
        displayValue = '0'};
    } else {
      displayValue === '0' ? displayValue = value : displayValue += value}

    this.setState({ displayValue });
  }

  
  render = () => {
    return (
      <div className="calculator-container" >
        <div className='calculator-header'>
          CALCULATOR 2021
          </div>
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