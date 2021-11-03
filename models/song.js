const mongoose = require('mongoose')

const SongsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    compositor:{
        type: String,
        required: true
    },
    album:{
        type: String,
        required: true
    }
},{collection:'Songs'})

module.exports = mongoose.model('Songs',SongsSchema)