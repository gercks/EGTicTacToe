'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
//
// $(() => {
//   setAPIOrigin(location, config)
// })

// const gameEvents = require('./games/events')

// $(() => {
//   $('td').on('click', gameEvents.addX)
// })

$('td').click(function () {
  // console.log($(this).html())
  if (($(this).html() === '')) {
    $(this).html()
    // $(this).html(changeTurn())
    // marks.splice(this.id, 1, $(this).html()) // adds the last x or o to the marks array
    // console.log(marks)
  }
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
