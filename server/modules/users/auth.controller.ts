/* eslint-disable no-underscore-dangle */
/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
const UserModel = require("./users.model");
const mapUserReq = require("./../../helpers/mapUserReq");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const configs = require("./../../configs/token");

function createToken(data) {
  const token = jwt.sign(data, configs.jwtSecret);
  return token;
}

async function login(req, res, next) {
  await UserModel.findOne({
    username: req.body.username,
  }).exec(async function (err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      const isPasswordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (isPasswordMatch) {
        const token = createToken({
          _id: user._id,
          name: user.username,
          role: user.role,
        });
        res.json({
          user,
          token,
        });
      } else {
        next({
          msg: "Inavlid password",
          status: 400,
        });
      }
    } else {
      next({
        msg: "Invalid username",
        status: 400,
      });
    }
  });
}

async function register(req, res, next) {
  const newUser = new UserModel();
  const newMappedUser = mapUserReq(newUser, req.body);
  const salt = await bcrypt.genSalt(10);
  newMappedUser.password = await bcrypt.hash(req.body.password, salt);
  await newMappedUser
    .save()
    .then(function (data) {
      res.json(data);
      console.log("Successfully Registered");
    })
    .catch(function (err) {
      next(err);
      console.log("error", err);
    });
}

module.exports = {
  login,
  register,
};
