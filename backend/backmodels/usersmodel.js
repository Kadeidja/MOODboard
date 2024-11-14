const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModelSchema = new Schema({
    userName: { Type: String/*, required: true*/ },
    userEmail: { Type: String/*, required: true*/ },
    userPswd: { Type: Password/*, required: true*/ }
  });
  
  // Export function to create "carrerModel" model class
  module.exports = mongoose.model("userModel", userModelSchema);