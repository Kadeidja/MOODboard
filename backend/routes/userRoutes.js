const express = require('express');
const expressRouter = express.Router();
//Crée le fichier userController et le fonnction qui s'y applique
const userCtrl = require('../controllers/userController');

//router.post('/subscription', userCtrl.addtheFunctionorController);
//router.post('/login', userCtrl.addtheFunctionorController);

expressRouter.post('/subscription', userCtrl.createuserModel);
//expressRouter.post('/login', userCtrl.addtheFunctionorController);

module.exports = expressRouter;
//OK