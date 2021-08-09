/* eslint-disable @typescript-eslint/no-var-requires */
const AuthCtrl = require("./auth.controller");
const AuthRouter = require("express").Router();

AuthRouter.route("/login").post(AuthCtrl.login);
AuthRouter.route("/register").post(AuthCtrl.register);

module.exports = AuthRouter;
