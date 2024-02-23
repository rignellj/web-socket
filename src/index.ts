import 'dotenv/config'

import express from 'express'
import { createServer } from 'node:http'
import { join } from 'node:path'

const PORT = process.env.PORT || 3001

const app = express()
const server = createServer(app)

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`)
})
