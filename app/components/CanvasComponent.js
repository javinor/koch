'use strict'

import React from 'react'

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props)
    this.canvasReadyToUpdate = this.canvasReadyToUpdate.bind(this)
  }

  componentDidMount() { window.requestAnimationFrame(this.canvasReadyToUpdate) }
  componentDidUpdate() { window.requestAnimationFrame(this.canvasReadyToUpdate) }

  canvasReadyToUpdate() {
    const ctx = this.refs.canvas.getContext('2d')
    this.props.onCanvasReadyToUpdate(ctx)
  }

  render() {
    const style = {
      // border: '2px solid blue'
    }

    return (
      <canvas 
        ref='canvas'
        height={this.props.height}
        width={this.props.width}
        style={style}>
        Canvas not supported!?
      </canvas>
    )
  }
}

CanvasComponent.defaultProps = {
  height: '300',
  width: '400'
}

export default CanvasComponent
