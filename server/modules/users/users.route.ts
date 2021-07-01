const UserRouter = require("express").Router();
const UserCtrl = require("./users.controller");

UserRouter.route("/").get(UserCtrl.get);

module.exports = UserRouter;
