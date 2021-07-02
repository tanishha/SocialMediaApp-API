const UserRouter = require("express").Router();
const UserCtrl = require("./users.controller");

UserRouter.route("/").get(UserCtrl.get);

UserRouter.route("/:id")
  .get(UserCtrl.getById)
  .delete(UserCtrl.deleteById)
  .put(UserCtrl.update);

module.exports = UserRouter;
