import React, { Component } from 'react';
import memImages from './images.json'
import MemoryCard from './components/MemoryCard'
import './App.css';

import shuffle from 'lodash.shuffle'

class App extends Component {
  state = {
    cards : [],
    clicked : []
  }

  componentDidMount(){
    this.shuffleCards();
  }

  handleClick = (name) => {
    if(this.state.clicked.includes(name)) {
      alert('you lose!')
    }
    else {
      const currentClicked = this.state.clicked;
      currentClicked.push(name);
      this.setState({clicked: currentClicked},
        this.shuffleCards());
    }
    console.log('Hello world: ', name);
  }

  shuffleCards = () => {
    const newCards = shuffle(memImages);
    this.setState({cards: newCards});
  } 

  render() {
    return (
      <div className="App">
        {this.state.cards.map((el, index) => <MemoryCard body={el} key={index} check={this.handleClick} />)}
      </div>
    );
  }
}

export default App;
