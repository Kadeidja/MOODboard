const expressApp = require("express");
const router = expressApp.Router();
// Require controller modules.
const userController = require('../../backcontrollers/userController');

router.get("/user", userController.getuserModel);
router.get("/user/:id", userController.getuserModelById)

module.exports = router;