var express = require("express");
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UsersController = require("../controllers/UsersController");

router.get("/", HomeController.index);
router.post("/user", UsersController.create);
router.get("/user", UsersController.index);
router.get("/user/:id", UsersController.findUser);

module.exports = router;
