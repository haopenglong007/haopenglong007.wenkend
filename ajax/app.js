var express=require('express')
var app=express()
var fs=require('fs')
var bodyParser = require('body-parser')

app.set('view engine','ejs')

app.use('/',express.static('src'))

app.listen(8081)
