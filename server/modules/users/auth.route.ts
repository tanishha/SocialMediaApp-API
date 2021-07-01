const AuthCtrl = require("./auth.controller");
const AuthRouter = require("express").Router();

AuthRouter.route("/login").get(AuthCtrl.login);
AuthRouter.route("/register").get(AuthCtrl.register);

module.exports = AuthRouter;
