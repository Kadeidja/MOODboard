const testModel = require('../backmodels/testmodel');

const asyncHandler = require("express-async-handler");


exports.createtestModel = asyncHandler(async(req, res)=>{
    const test = await testModel.create(req.body);
    res.json(test)
});


exports.gettestModel = asyncHandler(async(req, res)=>{
    const tests = await testModel.find();
    res.json(tests)
});


exports.gettestModelById = asyncHandler(async(req, res)=>{
    const test = await testModel.findById(req.params.id);
    res.json(test)
});
