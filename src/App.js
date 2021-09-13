import React, { Component } from "react"
import Button from "./components/Button";

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      count:0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    let { count } = this.state;
    return(
        <div>
          <h2>Count: { count }</h2>
          <Button title = "+1" task = { () => this.incrementCount() }/>
          <Button title = "-1" task = { () => this.decrementCount() }/>
        </div>
    )
  }


}