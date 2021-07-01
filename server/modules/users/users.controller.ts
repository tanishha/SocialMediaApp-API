const usermodel = require("./users.model");
const mapUser = require("./../../helpers/mapUserReq");

 async function get(req, res, next) {
    //get all users
   await usermodel.find({})
        .sort({
            _id: -1
        })
        .exec(function (err, users) {
            if (err) {
                return next(err);
            }
            res.json(users)
        })
}
module.exports = {
    get
  };
