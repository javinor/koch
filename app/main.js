'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Koch from './components/Koch'

const MIN_ITERATIONS = 1
const MAX_ITERATIONS = 9
const RESIZE_DELAY = 500 // in millisec


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      iterations: 1,
      height: window.innerHeight * 0.6,
      width: window.innerWidth,
      lastResizeTime: Date.now()
    }
  }

  handleResize() {
    if (Date.now() - this.state.lastResizeTime > RESIZE_DELAY) {
      this.setState({
        height: window.innerHeight * 0.6,
        width: window.innerWidth,
        lastResizeTime: Date.now()
      })
    }
  }
  componentDidMount() { window.addEventListener('resize', this.handleResize) }
  componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }

  increment() { this.setState({iterations: this.state.iterations + 1}) }
  decrement() { this.setState({iterations: this.state.iterations - 1}) }

  render() {
    const style = {
      width: '100%',
      'text-align': 'center',
      'font-family': 'Helvetica, Arial, sans-serif'
    }

    const spanStyle = {
      padding: '0 20px 0 20px'
    }

    const buttonStyle = {
      border: '1px solid #bbb',
      'border-radius': '5px'
    }

    return (
      <div style={style}>
        <div>
          <h1>Koch's Snowflake</h1>
          <div>
            <button 
              style={buttonStyle} 
              onClick={this.decrement} 
              disabled={this.state.iterations <= MIN_ITERATIONS}>-</button>
            <span style={spanStyle}>{this.state.iterations}</span>
            <button 
              style={buttonStyle}
              onClick={this.increment} 
              disabled={this.state.iterations >= MAX_ITERATIONS}>+</button>
          </div>
        </div>
        <Koch 
          iterations={this.state.iterations}
          height={Math.max(this.state.height, 200)}
          width={Math.max(this.state.width, 300)}
        />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))