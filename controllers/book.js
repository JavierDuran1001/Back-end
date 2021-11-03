const Book = require('../models/book')
const mongoose = require("mongoose")

exports.postAddBook = async(req,res)=>{
    const book = new Book(req.body)
    book._id = new mongoose.Types.ObjectId()
    try{
        await book.save()
        console.log(book)
        console.log("Libro añadido a la lista")
        res.send({operacion:"correcta"})

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.getGetBook = async(req,res)=>{
    const book = await Book.find()
    console.log(book)
    res.json(book)
}

exports.postDeleteBook = async(req,res)=>{
    try{
        const existe = await Book.exists({nombre:req.body.nombre})
        if(existe){
            await Book.findOneAndRemove({nombre:req.body.nombre })
            console.log("Libro borrado de la lista")
            res.json({operacion:"correcta"})
        }else{
            console.log("No se encuentra el libro!")
            res.json({operacion:"incorrecta"})
        }

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.postUpdateBook = async(req,res)=>{
    try{
        await Book.findOneAndUpdate({nombre:req.body.nombre},req.body.cambio)
        Book.exists()
        console.log("Lista de libros actualizada")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}