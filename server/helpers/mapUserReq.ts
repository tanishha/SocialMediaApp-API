module.exports = function (obj1, obj2) {
  if (obj2.username) obj1.username = obj2.username;
  if (obj2.password) obj1.password = obj2.password;
  if (obj2.email) obj1.email = obj2.email;
  if (obj2.profilePicture) obj1.profilePicture = obj2.profilePicture;
  if (obj2.isAdmin) obj1.isAdmin = obj2.isAdmin;
  if (obj2.followers) obj1.followers = obj2.followers;
  if (obj2.following) obj1.following = obj2.following;
  return obj1;
};
