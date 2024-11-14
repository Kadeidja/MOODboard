const userModel = require('../backmodels/usermodel');
const asyncHandler = require("express-async-handler");

exports.createuserModel = asyncHandler(async(req, res)=>{
    const user = await userModel.create(req.body);
    res.json(user)
});


exports.getuserModel = asyncHandler(async(req, res)=>{
    const users = await userModel.find();
    res.json(users)
});


exports.getuserModelById = asyncHandler(async(req, res)=>{
    const user = await userModel.findById(req.params.id);
    res.json(user)
});
