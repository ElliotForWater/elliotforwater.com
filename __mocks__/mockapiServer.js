const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares)

server.use('/api/searchresults', router)
server.listen(5001, () => {
  console.log('Mock api server listening at localhost:5001')
})
