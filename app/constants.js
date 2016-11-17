'use strict'

const RULES = {
  start: 'F++F++F++',
  prev: 'F',
  next: 'F-F++F-F'
}

const ACTIONS = {
  'F': pencil => ({
    x: pencil.x + pencil.length * Math.sin(pencil.angle),
    y: pencil.y - pencil.length * Math.cos(pencil.angle),
    angle: pencil.angle,
    length: pencil.length
  }),
  '+': pencil => ({
    x: pencil.x,
    y: pencil.y,
    angle: pencil.angle + Math.PI / 3,
    length: pencil.length
  }),
  '-': pencil => ({
    x: pencil.x,
    y: pencil.y,
    angle: pencil.angle - Math.PI / 3,
    length: pencil.length
  })
}

module.export = {
  RULES,
  ACTIONS
}
