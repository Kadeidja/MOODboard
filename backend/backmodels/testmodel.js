const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testModelSchema = new Schema({
    testTitle: { Type: String/*, required: true*/ },
    testDescription: { Type: String/*, required: true*/ },
    testImage: { Type: String/*, required: true*/ }
  });
  
  // Export function to create "carrerModel" model class
  module.exports = mongoose.model("testModel", testModelSchema);