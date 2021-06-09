const express = require('express')
const app = express();
const morgan = require('morgan')

//db
require('./db')

//load third-party middleware
app.use(morgan('dev'))

app.listen(3030, function (err, done) {
    if (err) {
        console.log('Server listening failed')
    } else {
        console.log('Server listening at port 3030');
        console.log (process.env.DATABASE_URL)
    }
})