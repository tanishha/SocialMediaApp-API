const router = require("express").Router();
const authRouter=require("../modules/users/auth.route")
const userRouter = require("./../modules/users/users.route");

router.use("/auth", authRouter);

router.use("/user", userRouter);

module.exports = router;
