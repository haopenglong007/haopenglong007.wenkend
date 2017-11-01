// express引入模板
var express = require('express')
// 模板引擎
var app = express()
//文件模块
var fs=require('fs')

app.use('/long',express.static('src'))

var bodyParser = require('body-parser')
//配置  模板引擎

//set  ejs
app.set('view engine','ejs')



app.get('/home',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('create.ejs')
})


app.get('/create',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('index2.ejs')
})

app.get('/women',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('index3.ejs')
})

app.get('/man',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('index4.ejs')
})

app.get('/text',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('index5.ejs')
})

app.get('/form',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('index6.ejs')
})

app.get('/jieshao',bodyParser.urlencoded({extended:true}),function(req,res){
	res.render('index7.ejs')
})

app.post('/create',bodyParser.urlencoded({extended:false}),function(req,res){
	var data = fs.readFileSync('message.txt','utf-8')
	data = JSON.parse(data)
	
	
	data.push({message:req.body.message,name:req.body.name,})
	fs.writeFileSync('message.txt',JSON.stringify(data));
	
	//render data to ejs file
	res.render('info.ejs',{data:data})    //响应模板引擎
})

app.listen(3002)





