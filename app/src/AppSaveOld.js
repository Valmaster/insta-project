import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      value: 0
    }
  }

  addCounter() {
    this.setState({counter: this.state.counter + parseInt(this.state.value)}, () => console.log(this.state.counter))
  }

  handleChange(e) {
    e.preventDefault()
    let { name, value } = e.target
    this.setState({
      [name]:value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.setState({counter: this.state.counter+1})}>+</button>
        <button onClick={() => this.setState({counter: this.state.counter-1})}>-</button>
        <input type="number" onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.addCounter()}>Add</button>
      </div>
    )
  }
}

export default App;
