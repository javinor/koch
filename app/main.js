'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button>-</button>
          <span>4</span>
          <button>+</button>
        </div>
        <div>
          <canvas></canvas>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'))