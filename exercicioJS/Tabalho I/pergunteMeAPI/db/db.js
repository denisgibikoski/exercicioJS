const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/pergunteMe')
    console.log('conectado')
}

exports.disconnect = () => {
    mongoose.disconnect()
}