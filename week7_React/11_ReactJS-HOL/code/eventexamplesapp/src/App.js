import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // 1a. Increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  // 1b. Say Hello method
  sayHello = () => {
    console.log("Hello! You clicked Increment.");
  };

  // Decrement method
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // 2. Function with argument
  sayMessage = (message) => {
    alert(`Say: ${message}`);
  };

  // 3. Synthetic Event handler
  handlePress = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event Object:", event);
  };

  render() {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial", textAlign: "center" }}>
        <h1>React Event Handling Demo</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayMessage("Welcome!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handlePress}>OnPress (Synthetic Event)</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
