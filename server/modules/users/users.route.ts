/* eslint-disable @typescript-eslint/no-var-requires */
const UserRouter = require("express").Router();
const UserCtrl = require("./users.controller");

UserRouter.route("/").get(UserCtrl.get);

UserRouter.route("/:id")
  .get(UserCtrl.getById)
  .delete(UserCtrl.deleteById)
  .put(UserCtrl.update);

UserRouter.route("/:id/follow").put(UserCtrl.follow);
UserRouter.route("/:id/unfollow").put(UserCtrl.unfollow);

module.exports = UserRouter;
