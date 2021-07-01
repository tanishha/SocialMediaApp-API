const UserModel = require("./users.model");
const mapUserReq = require("./../../helpers/mapUserReq");
const bcrypt = require("bcrypt");

function login(req, res, next) {}

async function register(req, res, next) {
  const newUser = new UserModel();
  const newMappedUser = mapUserReq(newUser, req.body);
  const salt = await bcrypt.genSalt(10);
  newMappedUser.password = await bcrypt.hash(req.body.password, salt);
    await newMappedUser
    .save()
    .then(function (data) {
      res.json(data);
      console.log("success");
    })
    .catch(function (err) {
      next(err);
    });
}

module.exports = {
  login,
  register,
};
