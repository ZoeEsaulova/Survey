var express = require('express');
var router = express.Router();
var Room = require('../models/room');
var Entry = require('../models/entry');

/* GET home page. */
router.get('/458625klfuieuj8ikkd58965dmmjkss', function(req, res) {
  res.render('home.ejs', { title: 'Home page' });
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('password.ejs', { title: 'Home page' });
});

/* GET home page. */
router.get('/error', function(req, res) {
  res.render('error.ejs', { title: 'Home page' });
});

/* GET password */
router.post('/', function(req, res) {
	if (req.body.word=="ifgi2015") {
		res.redirect('/458625klfuieuj8ikkd58965dmmjkss')
	} else {
		res.redirect('error')
	}
  	
});

/* get answers */
router.get('/458625klfuieuj8ikkd58965dmmjkss/send', function(req, res) {
	var room = { tiny: req.query.tiny,
		open: req.query.open,
		rSpace: req.query.rSpace }
	var entry = new Entry({ 
		age: req.query.age, 
		sex: req.query.sex, 
		room1: room
	})
	entry.save(function (err) {
		if (err) return console.error(err)
	});
  	res.redirect('/thanks');
});

router.get('/thanks', function(req, res) {
  res.render('thanks.ejs', { title: 'Home page' });
});

module.exports = router;
