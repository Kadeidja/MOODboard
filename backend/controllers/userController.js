const userModel = require('../models/userModels');

const asyncHandler = require("express-async-handler");


exports.createuserModel = asyncHandler(async(req, res)=>{
    const createauser = await userModel.create(req.body);
    res.json(createauser)
});


exports.getuserModel = asyncHandler(async(req, res)=>{
    const tests = await userModel.find();
    res.json(tests)
});


exports.getuserModelById = asyncHandler(async(req, res)=>{
    const test = await userModel.findById(req.params.id);
    res.json(test)
});