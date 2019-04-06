import React, { Component } from 'react';
import memImages from './images.json'
import MemoryCard from './components/MemoryCard'
import './App.css';

class App extends Component {
  state = {
    clicked : []
  }

  handleClick = (name) => {
    console.log('Hello world: ', name);
  }

  render() {
    return (
      <div className="App">
        {memImages.map((el, index) => <MemoryCard body={el} key={index} check={this.handleClick} />)}
      </div>
    );
  }
}

export default App;
