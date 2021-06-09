const router=require('express').Router()

const usersRouter=require('./../modules/users/users.route')


router.use('/users',usersRouter)

module.exports=router;