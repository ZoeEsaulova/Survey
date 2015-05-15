/* Database schema for datasets*/

var mongoose = require('mongoose');


var roomSchema = mongoose.Schema({
	roomID: { type: Number, required: true },
	tiny: { type: Number },
	open: { type: Number },
	rSpace: { type: Number }
});

// create the model for datasets and expose it to our app
module.exports = mongoose.model('Room', roomSchema);