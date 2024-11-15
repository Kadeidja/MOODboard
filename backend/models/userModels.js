const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String },
  useremail: { type: String, unique: true },
  userpassword: { type: String }
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);

//ok