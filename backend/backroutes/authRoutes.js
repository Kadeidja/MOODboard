const expressRequire = require('express');
const expressRouter = expressRequire.Router();
const cors = require('cors');
const {testing, subscriptionUser} = require('../backcontrollers/authControllers')

//MIDDLEWARE ROUTER
expressRouter.use(
    cors({
        credentials : true,
        origin: 'http://localhost:3000'
    })
)

expressRouter.get('/', testing)
expressRouter.post('/subscription', subscriptionUser)

module.exports = expressRouter