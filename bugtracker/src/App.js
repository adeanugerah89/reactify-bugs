import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import List from './List.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bug Tracker by HACKTIV8</h2>
        </div>
        <Form></Form>
        <List></List>
      </div>
    );
  }
}

export default App;
