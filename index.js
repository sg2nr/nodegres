const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/hello', (request, response) => {
  
  // Register visit
  const timestamp = new Date()
  db.addVisit(request.ip, request.headers['user-agent'], request.headers['accept-language'], request.headers['referer'], timestamp)  
  
  // Create response
  var jsonResponse = {
    message: 'Hello World!',
    timestamp: timestamp
  }

  response.status(200).json(jsonResponse)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})