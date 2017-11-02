'use strict'

const config = require('../config.js')

const show = function (x) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + x,
    method: 'GET'
  })
}

module.exports = {
  show
}
