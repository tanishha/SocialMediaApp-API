const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')

mongoose.connect(dbConfig.conxnUrl + '/' + dbConfig.dbName, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err, done) {
    if (err) {
        console.log('connecting error',err)
    } else {
        console.log('Database connection success')
    }
})
