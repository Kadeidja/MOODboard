const expressRequire = require('express');
const expressRouter = expressRequire.Router();
const cors = require('cors');
const UsersModel = require('../../backmodels/usersmodel')
//IMPORT THE CONTROLLER (FUNCTION THAT ARE APPLIED TO THE ROUTES)
const {subscriptionUser} = require('../../backcontrollers/authControllers')

expressRouter.use(
    cors({
        credentials : true,
        origin: 'http://localhost:3000'
    })
)
//MIDDLEWARE -> LIKING ROUTES TO THE CONTROLLERS
//expressRouter.post('/',authUser)
expressRouter.post('/subscription',subscriptionUser)








module.exports = expressRouter