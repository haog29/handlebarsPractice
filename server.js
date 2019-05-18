const express = require('express')
const exphdb = require('express-handlebars')
const {join} = require('path')
const server = express()

server.use(express.static(join(__dirname,'public')))

server.use(express.urlencoded({extend:true}))
server.use(express.json())

server.engine('handlebars', exphdb({defaultLayout:'main'}))
server.set('view engine', 'handlebars')

server.listen(3000, ()=> {
    console.log('server:3000')
})