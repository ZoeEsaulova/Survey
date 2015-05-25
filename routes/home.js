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
	var room1 = { 
		sb: req.query.sb1,
		open: req.query.open1,
		rSpace: req.query.rSpace1,
		invite: req.query.invite1,
		rest: req.query.rest1,
		cozy: req.query.cozy1,
		roomy: req.query.roomy1,
		wide: req.query.wide1,
		small: req.query.small1
	}
	var room2 = { 
		sb: req.query.sb2,
		open: req.query.open2,
		rSpace: req.query.rSpace2,
		invite: req.query.invite2,
		rest: req.query.rest2,
		cozy: req.query.cozy2,
		roomy: req.query.roomy2,
		wide: req.query.wide2,
		small: req.query.small2
	}
	var room3 = { 
		sb: req.query.sb3,
		open: req.query.open3,
		rSpace: req.query.rSpace3,
		invite: req.query.invite3,
		rest: req.query.rest3,
		cozy: req.query.cozy3,
		roomy: req.query.roomy3,
		wide: req.query.wide3,
		small: req.query.small3
	}
	var room4 = { 
		sb: req.query.sb4,
		open: req.query.open4,
		rSpace: req.query.rSpace4,
		invite: req.query.invite4,
		rest: req.query.rest4,
		cozy: req.query.cozy4,
		roomy: req.query.roomy4,
		wide: req.query.wide4,
		small: req.query.small4
	}
	var room5 = { 
		sb: req.query.sb5,
		open: req.query.open5,
		rSpace: req.query.rSpace5,
		invite: req.query.invite5,
		rest: req.query.rest5,
		cozy: req.query.cozy5,
		roomy: req.query.roomy5,
		wide: req.query.wide5,
		small: req.query.small5
	}
	var entry = new Entry({ 
		age: req.query.age, 
		sex: req.query.sex, 
		room1: room1,
		room2: room2,
		room3: room3,
		room4: room4,
		room5: room5,
		like: req.query.like,
		dislike: req.query.dislike,
		large: req.query.large,
		small: req.query.small
	})
	entry.save(function (err) {
		if (err) return console.error(err)
	});
	console.log("IP: " + req.connection.remoteAddress)
  	res.redirect('/thanks');
});

router.get('/thanks', function(req, res) {
  res.render('thanks.ejs', { title: 'Home page' });
});

module.exports = router;
