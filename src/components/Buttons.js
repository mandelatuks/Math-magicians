/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export class Buttons extends Component {
  render() {
    return (
      <div className="btn-grid">
        <button type="button" onClick={() => this.props.clickHandler('AC')}>AC</button>
        <button type="button" onClick={() => this.props.clickHandler('+/-')}>+/-</button>
        <button type="button" onClick={() => this.props.clickHandler('%')}>%</button>
        <button type="button" onClick={() => this.props.clickHandler('÷')} className="sideNumber">÷</button>
        <button type="button" onClick={() => this.props.clickHandler('7')}>7</button>
        <button type="button" onClick={() => this.props.clickHandler('8')}>8</button>
        <button type="button" onClick={() => this.props.clickHandler('9')}>9</button>
        <button type="button" onClick={() => this.props.clickHandler('x')} className="sideNumber">x</button>
        <button type="button" onClick={() => this.props.clickHandler('4')}>4</button>
        <button type="button" onClick={() => this.props.clickHandler('5')}>5</button>
        <button type="button" onClick={() => this.props.clickHandler('6')}>6</button>
        <button type="button" onClick={() => this.props.clickHandler('-')} className="sideNumber">-</button>
        <button type="button" onClick={() => this.props.clickHandler('1')}>1</button>
        <button type="button" onClick={() => this.props.clickHandler('2')}>2</button>
        <button type="button" onClick={() => this.props.clickHandler('3')}>3</button>
        <button type="button" onClick={() => this.props.clickHandler('+')} className="sideNumber">+</button>
        <button type="button" onClick={() => this.props.clickHandler('0')} className="Two-boxes">0</button>
        <button type="button" onClick={() => this.props.clickHandler('.')}>.</button>
        <button type="button" onClick={() => this.props.clickHandler('=')} className="sideNumber">=</button>
      </div>
    );
  }
}

export default Buttons;
