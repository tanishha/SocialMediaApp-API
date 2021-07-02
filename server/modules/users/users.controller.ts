const usermodel = require("./users.model");
const mapUser = require("./../../helpers/mapUserReq");
const bcryptpassword = require("bcrypt");

async function get(req, res, next) {
  await usermodel
    .find({})
    .sort({
      _id: -1,
    })
    .exec(function (err, users) {
      if (err) {
        return next(err);
      }
      res.json(users);
    });
}
async function getById(req, res, next) {
  await usermodel
    .findOne({
      _id: req.params.id,
    })
    .exec(function (err, users) {
      if (err) {
        return next(err);
      }
      if (users) {
        res.json(users);
      } else {
        next({
          msg: "User not found",
          status: 404,
        });
      }
    });
}
async function update(req, res, next) {
  await usermodel.findById(req.params.id).exec(async function (err, users) {
    if (err) {
      return next(err);
    }
    if (!users) {
      return next({
        msg: "User not found",
        status: 404,
      });
    }
    if (req.body.password) {
      const salt = await bcryptpassword.genSalt(10);
      req.body.password = await bcryptpassword.hash(req.body.password, salt);
    }
    const updatedUser = mapUser(users, req.body);
    await updatedUser.save(function (err, updated) {
      if (err) {
        return next(err);
      }
      res.json(updated);
    });
  });
}
async function deleteById(req, res, next) {
  await usermodel.findById(req.params.id).exec(function (err, users) {
    if (err) {
      return next(err);
    }
    if (users) {
      users.remove(function (err, removed) {
        if (err) {
          return next(err);
        }
        res.json(removed);
      });
    } else {
      next({
        msg: "User not found",
        status: 404,
      });
    }
  });
}

module.exports = {
  get,
  getById,
  deleteById,
  update,
};
