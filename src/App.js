import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'abanoub', 'age': 28 },
      { name: 'sandy', 'age': 25 },
    ]
  });
  const [otherState, setOtherState] = useState('some other value');
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'abanoub wagih', 'age': 28 },
        { name: 'sandy', 'age': 25 },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Welcome React</h1>
      <button onClick={switchNameHandler}> Click here</button>
      <Person name={personsState.persons[0].name}
       age={personsState.persons[0].age}>
        <p>My Hobbies: Football</p>
        </Person>

      <Person name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      >
      </Person>
    </div>
  );
}


export default App;

