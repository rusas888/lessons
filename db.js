const Mongoose = require('mongoose')
const Config = require('./configs')

Mongoose.connect(Config.database.url, {
	"user": "admin",
    "pass": "AKLbif64267@"
});
const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log('Connection with database succeeded.')
});

exports.db = db;