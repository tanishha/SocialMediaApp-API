const UserModel = require("./users.model");
const mapUserReq = require("./../../helpers/mapUserReq");
function login(req, res, next) {}

function register(req, res, next) {
  const newUser = new UserModel();
  const newMappedUser = mapUserReq(newUser, req.body);
  newMappedUser
    .save()
    .then(function (data) {
      res.json(data);
      console.log("success")
    })
    .catch(function (err) {
      next(err);
    });
}

module.exports = {
  login,
  register,
};
