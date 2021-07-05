module.exports = function (obj1, obj2) {
  if (obj2.likes) obj1.likes = obj2.likes;
  if (obj2.userId) obj1.userId = obj2.userId;
  if (obj2.img) obj1.img = obj2.img;
  if (obj2.caption) obj1.caption = obj2.caption;
  return obj1;
};
