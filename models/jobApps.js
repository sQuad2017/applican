var mongoose = require('mongoose');
var jobAppSchema = new mongoose.Schema({
    status: String,
    jobTitle: String,
    company: String,
    link: String,
    dateApplied: Date
  });

  mongoose.model('JobApp', jobAppSchema);
