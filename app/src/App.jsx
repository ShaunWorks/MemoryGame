import React, { Component } from 'react';
import memImages from './images.json'
import CardContainer from './components/CardContainer'
import NavBar from './components/NavBar'
import './App.css';

import shuffle from 'lodash.shuffle'

class App extends Component {
  state = {
    cards : [],
    clicked : [],
    feedback : 'Don\'t click a Pepe twice!',
    currentScore : 0,
    highScore : 0
  }

  componentDidMount(){
    this.shuffleCards();
  }

  handleClick = (name) => {
    if(this.state.clicked.includes(name)) {
      this.setState({currentScore: 0, clicked: [], feedback: 'Wrong guess...'},
        this.shuffleCards());
    }
    else {
      const currentClicked = this.state.clicked;
      currentClicked.push(name);
      this.setState({clicked: currentClicked, currentScore: this.state.currentScore+1, feedback: 'Right guess!'},
        () => { 
          // if you gain score and its higher than the highscore, set highscore to score
          if(this.state.highScore < this.state.currentScore)
            this.setState({highScore: this.state.currentScore})
          this.shuffleCards();
        }
      )
    }
  }
  
  shuffleCards = () => {
    const newCards = shuffle(memImages);
    this.setState({cards: newCards});
  } 

  render() {
    return (
      <div className="app">
        <NavBar feedback={this.state.feedback} currentScore={this.state.currentScore} highScore={this.state.highScore}/>
        <CardContainer cards={this.state.cards} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
