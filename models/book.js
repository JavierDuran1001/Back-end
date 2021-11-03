const mongoose = require('mongoose')

const BooksSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    escritor:{
        type: String,
        required: true
    },
    ISBN:{
        type: Number,
        required: true
    }
},{collection:'Books'})

module.exports = mongoose.model('Books',BooksSchema)