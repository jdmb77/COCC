'use strict'

const APP = require('express')()
const HTTP = require('http').Server(APP)
const IO = require('socket.io')(HTTP)

APP.get('/', (req, res) => {
  res.sendfile('index.html')
})

IO.on('connection', socket => {
  socket.on('chat message', msg => {
    IO.emit('chat message', msg)
  })
})

HTTP.listen(3000, () => {
  console.log('listening on *:3000')
})