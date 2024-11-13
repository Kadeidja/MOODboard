const expressApp = require("express");
const router = expressApp.Router();
// Require controller modules.
const testController = require('../backcontrollers/testController');

router.get("/test", testController.gettestModel);
router.get("/test/:id", testController.gettestModelById)

module.exports = router;