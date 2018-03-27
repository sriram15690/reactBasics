import React, { Component } from 'react';
import { render } from 'react-dom';
import productList from '../css/productList.css';
//import '../css/style.css';

export default class Hello extends Component {
  render() {
    return (
      <div>
       <p> This text should be italicised.(from react css)</p>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('container'));