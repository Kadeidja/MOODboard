const mongoose = require("mongoose");
//const Schema = mongoose.Schema;
const {Schema} = require('mongoose');
const bcrypt = require('bcryptjs');

const userModelSchema = new Schema({
    userName: { 
      type: String,
    },
    userEmail: { 
      type: String,
      unique: true,
    },
    userPswd: { 
      type: String
    }
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userModelSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.userPswd);
};

// Encrypt password using bcrypt
userModelSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.userPswd = await bcrypt.hash(this.userPswd, salt);
});
    // Export function to create "userModel" model class in the database
  const UsersModel = mongoose.model("userCollection", userModelSchema);

  module.exports = UsersModel;