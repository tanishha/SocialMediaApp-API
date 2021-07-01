module.exports = function (obj1, obj2) {

   if (obj2.username)
      obj1.username = obj2.username
   if (obj2.password)
      obj1.password = obj2.password

   if (obj2.email)
      obj1.email = obj2.email

   return obj1
}