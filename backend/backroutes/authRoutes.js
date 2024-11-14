const expressRequire = require('express');
const expressRouter = expressRequire.Router();
const cors = require('cors');
const {testing} = require('../backcontrollers/authControllers')
//MIDDLEWARE ROUTER
expressRouter.use(
    cors({
        credentials : true,
        origin: 'htttp://localhost:3000'
    })
)

expressRouter.get('/', testing)

module.exports = expressRouter