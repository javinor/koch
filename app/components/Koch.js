'use strict'

import React from 'react'

import CanvasComponent from './CanvasComponent'
import {RULES, ACTIONS} from '../constants'

class Koch extends React.Component {
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

  getNthPath(n) {
    const paths = [RULES.start]

    while (paths.length < n) {
      const prev = paths[paths.length - 1]
      const next = prev.replace(new RegExp(RULES.prev, 'gi'), RULES.next)
      paths.push(next)
    }

    return paths[n - 1]
  }

  updateCanvas(ctx) {
    const path = this.getNthPath(this.props.iterations)
    let pencil = this.getStartPosition()

    ctx.clearRect(0, 0, this.props.width, this.props.height)
    ctx.beginPath()
    ctx.strokeStyle = this.props.strokeStyle
    ctx.moveTo(pencil.x, pencil.y)

    for (let i = 0, len = path.length; i < len; i += 1) {
      pencil = ACTIONS[path[i]](pencil)
      ctx.lineTo(pencil.x, pencil.y)
    }

    ctx.stroke()
    ctx.closePath()
  }

  render() {
    return (
      <CanvasComponent 
        height={this.props.height}
        width={this.props.width}
        onCanvasReadyToUpdate={this.updateCanvas}
      />
    )
  }
}

Koch.defaultProps = {
  height: '300',
  width: '400',
  strokeStyle: '#000'
}

export default Koch
