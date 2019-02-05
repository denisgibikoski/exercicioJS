const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/pergunteMe', { useNewUrlParser: true })
    console.log('conectado ok')
}

exports.disconnect = () => {
    mongoose.disconnect()
}