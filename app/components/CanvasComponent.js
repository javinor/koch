'use strict'

import React from 'react'

function getNthPath(n, prevPaths, rules) {
  var paths = []
  for (let i=0; i<prevPaths.length; i++) {
    paths.push(prevPaths[i])
  }

  while (paths.length < n) {
    const prev = paths[paths.length - 1]
    const next = prev.replace(new RegExp(rules.prev, 'gi'), rules.next)
    paths.push(next);
  }
  return paths[n - 1];
}


class CanvasComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rules: {
        start: 'F++F++F++',
        prev: 'F', 
        next: 'F-F++F-F'
      },
      actions: {
        'F': (ctx, pencil) => {
          pencil.x += pencil.line * Math.sin(pencil.angle);
          pencil.y -= pencil.line * Math.cos(pencil.angle);
          ctx.lineTo(pencil.x, pencil.y);
        },
        '+': (ctx, pencil) => { pencil.angle += Math.PI / 3; },
        '-': (ctx, pencil) =>{ pencil.angle -= Math.PI / 3; }
      },
      startPosition: { 
        x: this.props.width / 3,
        y: this.props.height * 2 / 5, 
        angle: Math.PI / 2, 
        length: this.props.width / 3 
      }
    }

    this.updateCanvas = this.updateCanvas.bind(this)
  }
  componentDidMount() {
      this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
    const path = getNthPath(this.props.iterations, [this.state.rules.start], {
      prev: this.state.rules.prev, 
      next: this.state.rules.next
    })

    let pencil = {
      x : this.state.startPosition.x,
      y : this.state.startPosition.y,
      angle : this.state.startPosition.angle,
      line : this.state.startPosition.length / Math.pow(3, this.props.iterations - 1) // TODO n-1
    }

    const ctx = this.refs.canvas.getContext('2d')
    ctx.clearRect(0, 0, this.props.width, this.props.height)
    ctx.beginPath()
    ctx.strokeStyle = this.props.strokeStyle
    ctx.moveTo(pencil.x, pencil.y)

    for (let i = 0; i < path.length; i += 1) {
      this.state.actions[path[i]](ctx, pencil)
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
  height: '300',
  width: '400',
  strokeStyle: '#000'
}


export default CanvasComponent
