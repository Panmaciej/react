const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const port = process.env.PORT || 3001
const db = require('./db.json');
server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
    if (req.method === 'POST') {
      // Converts POST to GET and move payload to query params
      // This way it will make JSON Server that it's GET request
      req.method = 'GET'
      req.query = req.body
    }
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Continue to JSON Server router
    next()
  })

server.get('/overview', (request, response) => {
    if (request.method === 'GET') {
      response.status(200).jsonp(db.overview)
    }
})

server.get('/global', (request, response) => {
    if (request.method === 'GET') {
      response.status(200).jsonp(db.global)
    }
})
server.listen(port, () => {
 console.log('JSON Server is running')
})