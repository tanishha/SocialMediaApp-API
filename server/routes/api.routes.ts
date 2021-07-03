const router = require("express").Router();
const authRouter=require("../modules/users/auth.route")
const userRouter = require("./../modules/users/users.route");
const authenticate=require("./../middlewares/authenticate")
router.use("/auth", authRouter);

router.use("/user",authenticate, userRouter);

module.exports = router;
