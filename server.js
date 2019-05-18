const express = require('express')
const exphdb = require('express-handlebars')
const {join} = require('path')
const server = express()


const routes = require('./routes')

server.use(express.static(join(__dirname,'public')))

server.use(express.urlencoded({extend:true}))
server.use(express.json())

server.engine('handlebars', exphdb({defaultLayout:'main'}))
server.set('view engine', 'handlebars')

server.use(routes)

server.listen(3000, ()=> {
    console.log('server:3000')
})