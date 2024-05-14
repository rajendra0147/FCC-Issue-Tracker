const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const db = mongoose.connect(uri).then(() => console.log('You are connected')).catch((e) => console.log(e))

module.exports = db 