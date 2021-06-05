const express = require('express')
const app = express();



app.listen(3030, function (err, done) {
    if (err) {
        console.log('Server listening failed')
    } else {
        console.log('Server listening at port 3030');
    }
})