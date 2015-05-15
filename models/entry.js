/* Database schema for datasets*/

var mongoose = require('mongoose');


var entrySchema = mongoose.Schema({
	age: Number,
	sex: String,
	room1: { 
		tiny: Number,
		open: Number,
		rSpace: Number 
	}, 
	room2: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, 
	room3: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, 
	room4: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, 
	room5: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, 
	room6: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, 
});

// create the model for datasets and expose it to our app
module.exports = mongoose.model('Entry', entrySchema);