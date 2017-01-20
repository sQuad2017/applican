var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = mongoose.model('User');
var jobApp = mongoose.model('JobApp');
var jobAppCtrl = require('../controllers/jobAppsCtrl.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AppliCan' });
});

router.post('/jobapps', jobAppCtrl.jobAppsCreate);

module.exports = router;
