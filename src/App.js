import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = "Welcome to the road to learn React";
    const newApp = "Here is my first app in React, I love React";
    const user = {
        firstname: "Nivans",
        lastname: "Hotchkiss"
    };
    return (
      <div className="App">
          <h2>{helloWorld}</h2>
          <h3>{newApp}</h3>
          <p>Hello {user.firstname} {user.lastname}, Welcome to our React App!</p>
        </div>
    );
  }
}

export default App;
