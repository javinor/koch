'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import CanvasComponent from './components/CanvasComponent'

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

  componentDidUpdate() {
    console.log('in comp did update')
    console.log(this.state.iterations)
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.iterations}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <CanvasComponent iterations={this.state.iterations}/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))