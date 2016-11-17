/* globals window */

'use strict'

const React = require('react')

class CanvasComponent extends React.Component {

  constructor(props) {
    super(props)
    this.canvasReadyToUpdate = this.canvasReadyToUpdate.bind(this)
    this.canvasRef = this.canvasRef.bind(this)
  }

  componentDidMount() {
    window.requestAnimationFrame(this.canvasReadyToUpdate)
  }
  shouldComponentUpdate() { // eslint-disable-line class-methods-use-this
    return true
  }
  componentDidUpdate() {
    window.requestAnimationFrame(this.canvasReadyToUpdate)
  }

  canvasRef(canvas) {
    this.canvas = canvas
  }

  canvasReadyToUpdate() {
    const ctx = this.canvas.getContext('2d')
    this.props.onCanvasReadyToUpdate(ctx)
  }

  render() {
    const style = {
      // border: '2px solid blue'
    }

    return (
        <canvas
            height={this.props.height}
            ref={this.canvasRef}
            style={style}
            width={this.props.width}
        >
            {'Canvas not supported!?'}
        </canvas>
    )
  }
}

CanvasComponent.propTypes = {
  height: React.PropTypes.number,
  onCanvasReadyToUpdate: React.PropTypes.func.isRequired,
  width: React.PropTypes.number
}
CanvasComponent.defaultProps = {
  height: '300',
  width: '400'
}

module.exports = CanvasComponent
