var mongoose = require('mongoose');
var jobApp = mongoose.model('JobApp');

module.exports.jobAppsCreate = function(req, res) {
  jobApp.create({
    status: req.body.status,
    jobTitle: req.body.jobTitle,
    company: req.body.company,
    link: req.body.link,
    dateApplied: req.body.dateApplied
  });
};
