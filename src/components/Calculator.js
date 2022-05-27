import React, { Component } from 'react';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-flex">
        <div className="output">
          <div className="operand"> 0</div>
        </div>

      </div>
    );
  }
}

export default Calculator;
