import 'dotenv/config'

import express from 'express'
import { createServer } from 'node:http'
import { join } from 'node:path'
import { Server, Socket } from 'socket.io'

const PORT = process.env.PORT || 3001

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (_, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

io.on('connection', (socket: Socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`)
})
