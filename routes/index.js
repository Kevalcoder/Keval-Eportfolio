/**
* File name : index.js router file
* Keval Sanjaybhai Patel
* Student ID 301171202
* Date: 12/02/2021
*/
var express = require('express');
var router = express.Router();


/* Default values */
let firstName = 'Keval';
let lastName = 'Patel';
let contactNumber = '+919265726450';
let emailId = 'keval7126@gmail.com';
let message = 'Smile please';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    firstName: firstName,
    lastName: lastName,
    contactNumber: contactNumber,
    emailId: emailId,
    message: message,
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    firstName: firstName,
    lastName: lastName,
    contactNumber: contactNumber,
    emailId: emailId,
    message: message,
  });
});



/* GET About Me. */
router.get('/aboutMe', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Project page */
router.get('/p', function(req, res, next) {
  res.render('project', { title: 'Project' });
});


/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});

/* GET Contact page. */
router.get('/c', function(req, res, next) {
  res.render('contact', { title: 'Contacts' });
});

/* POST contact page */
router.post('/c', function(req, res,next) {
  firstName = req.body.fname;
  lastName = req.body.lname;
  contactNumber = req.body.phone;
  emailId = req.body.email;
  message = req.body.msg;
  res.redirect('/home');
});


module.exports = router;
