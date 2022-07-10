import React, { Component, createElement } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome React</h1>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'welcome react'))
  }
}

export default App;
