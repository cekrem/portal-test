import React, { Component } from 'react';
import logo from './logo.svg';
import Portal from './Portal.js';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    showPortal: false
  }
  
  interval = 0
  
  togglePortal = () => {
    this.setState(state => Object.assign({}, state, {showPortal: !state.showPortal}))
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => Object.assign({}, state, { counter: state.counter +1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      {this.state.counter}
      </p>
      <button onClick={this.togglePortal}>
      {this.state.showPortal ? 'Close the' : 'Open a'} Portal
      </button>
      {this.state.showPortal && (
        <Portal>
          <h1>
            Counter in portal: {this.state.counter}
          </h1>
        </Portal>
      )}
      </div>
    );
  }
}

export default App;
