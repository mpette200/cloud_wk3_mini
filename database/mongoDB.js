const mongoose = require('mongoose')
require('dotenv/config')

const connect = function() {
    mongoose.connect(process.env.DB_CONNECTOR, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('mongo DB is now connected')
        }
    })
}

module.exports = { connect }
