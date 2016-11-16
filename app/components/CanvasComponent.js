'use strict'

import React from 'react'

import {RULES, ACTIONS} from '../constants'

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props)

    this.getStartPosition = this.getStartPosition.bind(this)
    this.updateCanvas = this.updateCanvas.bind(this)
  }

  getStartPosition() {
    return { 
      x: this.props.width / 3,
      y: this.props.height * 2 / 5,
      angle: Math.PI / 2,
      length: this.props.width / Math.pow(3, this.props.iterations)
    }
  }
  componentDidMount() { this.updateCanvas() }
  componentDidUpdate() { this.updateCanvas() }

  updateCanvas() {
    let pencil = this.getStartPosition()

    const ctx = this.refs.canvas.getContext('2d')
    ctx.clearRect(0, 0, this.props.width, this.props.height)
    ctx.beginPath()
    ctx.strokeStyle = this.props.strokeStyle
    ctx.moveTo(pencil.x, pencil.y)

    for (let i = 0; i < this.props.path.length; i += 1) {
      pencil = ACTIONS[this.props.path[i]](pencil)
      ctx.lineTo(pencil.x, pencil.y)
    }

    ctx.stroke()
    ctx.closePath()
  }

  render() {
    return (
      <div>
        <canvas 
          ref='canvas'
          height={this.props.height}
          width={this.props.width}
          style={{border: '1px solid blue'}}>
          Canvas not supported!?
        </canvas>
      </div>
    )
  }
}

CanvasComponent.defaultProps = {
  strokeStyle: '#000'
}

export default CanvasComponent
