var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    password: String
  });

  mongoose.model('User', userSchema);
