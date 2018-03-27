import React, { Component } from 'react';
import { render } from 'react-dom';

//import '../css/style.css';

export default class Hello extends Component {
  render() {
    console.log("hi");
    return (
      <div>
       <h1> Hello from react </h1>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('container'));