const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

//db
const mongoose = require('mongoose')
const Configs = require('./configs')
require('./db')

const Post = require('./Post')

const app = new express()

app.set('port', process.env.PORT || 3000)
app.use(logger('dev'))
app.use(bodyParser.json({limit: '100mb'}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }))

app.use('/images/', express.static('images'))
app.use('/dist/', express.static('dist'))

var posts = [
	{
		title: 'Post #1',
		text: 'THIS IS MY POST #1'
	},
	{
		title: 'Post #2',
		text: 'THIS IS MY POST #2'
	},
	{
		title: 'Post #3',
		text: 'THIS IS MY POST #3'
	}
]

app.get('/news', (req, res) =>  {
	Post.find({}, (err, result) => {
		res.status(200).send(result).end()
	})
})

app.put('/news', (req, res) => {
	const _post = new Post({
		title: req.body.title,
		text: req.body.text
	})
	_post.save((err, result) => {
		if(err) res.status(400).send(err).end()
		else {
			res.status(200).send(result).end()
		}
	})
})

app.post('/news', (req, res) => {
	Post.update({_id: req.body._id}, {$set: {title: req.body.title, text: req.body.text}}, (err, result) => {
		if(err) res.status(400).send(err).end()
		else {
			res.status(200).send({
				title: req.body.title,
				text: req.body.text
			}).end()
		}
	})
})

app.delete('/news/:_id', (req,res) => {
	Post.remove({_id: mongoose.Types.ObjectId(req.params._id)}, (err, result) =>{
		if(err) res.status(400).send(err).end()
		else res.status(200).send({ok: true})
	})
	
})



app.get('*', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'),function(error){
	if(error) {
		console.error(error)
	} else {
		console.info('Сервер успешно запущен. Порт: ' + app.get('port'))
	}
})