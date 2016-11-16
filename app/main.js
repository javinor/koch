'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import CanvasComponent from './components/CanvasComponent'
import Koch from './components/Koch'

const MIN_ITERATIONS = 1
const MAX_ITERATIONS = 8

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {iterations: 1}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment(e) {
    this.setState({iterations: this.state.iterations + 1})
  }

  decrement() {
    this.setState({iterations: this.state.iterations - 1})
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.decrement} disabled={this.state.iterations <= MIN_ITERATIONS}>-</button>
          <span>{this.state.iterations}</span>
          <button onClick={this.increment} disabled={this.state.iterations >= MAX_ITERATIONS}>+</button>
        </div>
        <Koch iterations={this.state.iterations}/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))