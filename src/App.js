import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleClick() {
    this.setState({
      items: []
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div id="app">
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} placeholder="Type your task" required/> <br/> <br/>
          <button>Submit</button>
        </form>
      <ul> <li onClick={(e) => this.handleClick(e)}>  <List items={this.state.items} />  </li> </ul>
      </div>
    );
  }
}
