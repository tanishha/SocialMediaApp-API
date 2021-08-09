/* eslint-disable @typescript-eslint/no-var-requires */
const router = require("express").Router();
const authRouter = require("../modules/users/auth.route");
const userRouter = require("./../modules/users/users.route");
const authenticate = require("./../middlewares/authenticate");
const postRouter = require("../modules/posts/post.route");
router.use("/auth", authRouter);

router.use("/user", authenticate, userRouter);

router.use("/post", postRouter);

module.exports = router;
