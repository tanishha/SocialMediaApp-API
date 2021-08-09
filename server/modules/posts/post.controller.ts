/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-keys */
const postmodel = require("./post.model");
const mapPostReq = require("./../../helpers/mapPostReq");

async function createPost(req, res, next) {
  const newPost = new postmodel();
  const newMappedPost = mapPostReq(newPost, req.body);
  if (req.loggedInUser.id === newMappedPost.userId) {
    await newMappedPost
      .save()
      .then(function (data) {
        res.json(data);
        console.log("Successfully Post created");
      })
      .catch(function (err) {
        next(err);
      });
  } else {
    return next({
      msg: "You can only create posts for yourself",
      status: 404,
    });
  }
}
async function getPostById(req, res, next) {
  await postmodel
    .findOne({
      _id: req.params.id,
    })
    .exec(function (err, post) {
      if (err) {
        return next(err);
      }
      if (post) {
        res.json(post);
      } else {
        next({
          msg: "Post not found",
          status: 404,
        });
      }
    });
}
async function updatePost(req, res, next) {
  await postmodel.findById(req.params.id).exec(async function (err, post) {
    if (err) {
      return next(err);
    }
    if (!post) {
      return next({
        msg: "Post not found",
        status: 404,
      });
    }
    const Post = await postmodel.findById(req.params.id);
    if (req.loggedInUser.id === Post.userId) {
      const updatedPost = mapPostReq(post, req.body);
      await updatedPost.save(function (err, updated) {
        if (err) {
          return next(err);
        }
        res.json(updated);
      });
    } else {
      return next({
        msg: "You can only update your posts",
        status: 404,
      });
    }
  });
}

async function deletePost(req, res, next) {
  await postmodel.findById(req.params.id).exec(async function (err, post) {
    if (err) {
      return next(err);
    }
    const Post = await postmodel.findById(req.params.id);
    if (post) {
      if (req.loggedInUser.id === Post.userId || req.body.isAdmin) {
        post.remove(function (err, removed) {
          if (err) {
            return next(err);
          }
          res.json(removed);
        });
      } else {
        return next({
          msg: "You can only delete your post",
          status: 404,
        });
      }
    } else {
      next({
        msg: "Post not found",
        status: 404,
      });
    }
  });
}
async function like(req, res, next) {
  await postmodel.findById(req.params.id).exec(async function (err, posts) {
    if (err) {
      return next(err);
    }
    if (posts) {
      const post = await postmodel.findById(req.params.id);
      if (!post.likes.includes(req.loggedInUser.id)) {
        await post.updateOne({ $push: { likes: req.loggedInUser.id } });
        res.status(200).json("You liked this picture");
      } else {
        await post.updateOne({ $pull: { likes: req.loggedInUser.id } });
        res.status(200).json("You unliked this picture");
      }
    } else {
      next({
        msg: "Post not found",
        status: 404,
      });
    }
  });
}
module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  like,
};
