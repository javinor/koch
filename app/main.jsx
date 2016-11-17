/* globals window */
/* eslint-disable react/no-set-state */

'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

const Koch = require('./components/Koch.jsx')

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

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
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
  increment() {
    this.setState({ iterations: this.state.iterations + 1 })
  }
  decrement() {
    this.setState({ iterations: this.state.iterations - 1 })
  }

  render() {
    const style = {
      'width': '100%',
      'textAlign': 'center',
      'fontFamily': 'Helvetica, Arial, sans-serif'
    }

    const spanStyle = {
      padding: '0 20px 0 20px'
    }

    const buttonStyle = {
      'border': '1px solid #bbb',
      'borderRadius': '5px'
    }

    return (
        <div style={style}>
            <div>
                <h1>{'Koch\'s Snowflake'}</h1>
                <div>
                    <button
                        disabled={this.state.iterations <= MIN_ITERATIONS}
                        onClick={this.decrement}
                        style={buttonStyle}
                    >
                        {'Decrement'}
                    </button>
                    <span style={spanStyle}>{this.state.iterations}</span>
                    <button
                        disabled={this.state.iterations >= MAX_ITERATIONS}
                        onClick={this.increment}
                        style={buttonStyle}
                    >
                        {'Increment'}
                    </button>
                </div>
            </div>
            <Koch
                height={Math.max(this.state.height, 200)}
                iterations={this.state.iterations}
                width={Math.max(this.state.width, 300)}
            />
        </div>
    )
  }
}

ReactDOM.render(<Main />, window.document.getElementById('app'))
