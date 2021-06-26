const express = require('express')
const app = express();
const morgan = require('morgan')

//db
require('./db')

//call routing level middleware
const apiRoute = require('./routes/api.routes')

//load third-party middleware
app.use(morgan('dev'))

//inbuilt middleware for parsing incoming data
app.use(express.urlencoded({ 
    extended: true
}))
app.use(express.json()) //(for json)

//load routing level middleware(mount)
app.use('/api', apiRoute)
app.use(function (req, res, next) { //for undefined request
    next({
        msg: 'NOT FOUND 404',
        status: 404
    })
})

app.listen(3030, function (err, done) {
    if (err) {
        console.log('Server listening failed')
    } else {
        console.log('Server listening at port 3030');
    }
})