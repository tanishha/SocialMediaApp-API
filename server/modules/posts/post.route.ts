const PostRouter = require("express").Router();
const PostCtrl = require("./post.controller");
const Authenticate=require("../../middlewares/authenticate")
PostRouter.route("/").post(Authenticate,PostCtrl.createPost);

PostRouter.route("/:id")
  .get(PostCtrl.getPostById)
  .put(Authenticate,PostCtrl.updatePost)
  .delete(Authenticate,PostCtrl.deletePost);

PostRouter.route("/:id/like").put(Authenticate,PostCtrl.like)
module.exports = PostRouter;
