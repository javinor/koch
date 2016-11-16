'use strict'

import React from 'react'

import CanvasComponent from './CanvasComponent'
import {RULES} from '../constants'

class Koch extends React.Component {
  
  getNthPath(n) {
    const paths = [RULES.start]

    while (paths.length < n) {
      const prev = paths[paths.length - 1]
      const next = prev.replace(new RegExp(RULES.prev, 'gi'), RULES.next)
      paths.push(next)
    }

    return paths[n - 1]
  }

  render() {
    return (
      <div>
        <CanvasComponent 
          height={this.props.height}
          width={this.props.width}
          path={this.getNthPath(this.props.iterations)}
          iterations={this.props.iterations}
        />
      </div>
    )
  }
}

Koch.defaultProps = {
  height: '300',
  width: '400',
}

export default Koch
