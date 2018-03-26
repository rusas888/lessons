const mongoose = require('mongoose')

const Post = new mongoose.Schema({
	title: String,
	text: String
})

module.exports = mongoose.model('Post', Post)