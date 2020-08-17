const http = require('http')
// const fs = require('fs')
const chalk = require('chalk')
const inpuz = require('./main/index')

const hostname = '127.0.0.1'
const port = 8000
const server = http.createServer((req, res) => {
res.statusCode = 200
res.setHeader('Content-Type', 'text/plain')
res.end('Hello World')
// res.end(chalk.greenBright('Hello World'))
})
// server.listen(port, hostname, () => {
// console.log(`Server running at http://${hostname}:${port}/`)
// })

server.listen(port, hostname)
