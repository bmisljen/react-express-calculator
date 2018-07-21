import React, { Component } from 'react';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      response: ''
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  componentDidMount() {
     this.callApi()
       .then(res => this.setState({ response: res.express }))
       .catch(err => console.log(err));
   }

  callApi = async () => {
    const response = await fetch('/calculator');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="component-app">
        <header className="App-header">
        <h1 className="App-title">{this.state.response}</h1>
        </header>
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
