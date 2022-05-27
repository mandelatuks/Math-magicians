/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { Calculator } from './components/Calculator';

export class App extends Component {
  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
