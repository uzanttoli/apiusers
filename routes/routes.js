var express = require("express");
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UsersController = require("../controllers/UsersController");
const User = require("../models/User");

router.get("/", HomeController.index);
router.post("/user", UsersController.create);
router.get("/user", UsersController.index);
router.get("/user/:id", UsersController.findUser);
router.put("/user", UsersController.edit);
router.delete("/user/:id", UsersController.remove);
router.post("/recoverypassword", UsersController.recoverypassword)

module.exports = router;
