const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/chamadas')
}

exports.disconnect = () => {
    mongoose.disconnect()
}