import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome React</h1>
      <Person name="abnaoub" age="28"><p>My Hobbies: Football</p></Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'welcome react'))
  }
}

export default App;
