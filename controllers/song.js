const Song = require('../models/song')
const mongoose = require("mongoose")

exports.postAddSong = async (req,res)=>{
    const song = new Song(req.body)
    song._id = new mongoose.Types.ObjectId()
    try{
        await song.save()
        console.log(song)
        console.log("Canción agregada a la lista")
        res.send({operacion:"correcta"})

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.getGetSong = async (req,res)=>{
    const song = await Song.find()
    console.log(song)
    res.json(song)
}

exports.postDeleteSong = async (req,res)=>{
    try{
        const existe = await Song.exists({nombre:req.body.nombre})
        if (existe){
            await Song.findOneAndRemove({nombre:req.body.nombre})
            console.log("Canción borrada de la lista")
            res.json({operacion:"correcta"})
        }else{
            console.log("No se encuentra la canción!")
            res.json({operacion:"incorrecta"})
        }

    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

exports.postUpdateSong = async(req,res)=>{
    try{
        await Song.findOneAndUpdate({nombre:req.body.nombre},req.body.cambio)
        Song.exists()
        console.log("Lista de canciones actualizada")
        res.json({operacion:"correcta"})
    }catch(err){
        console.log(err)
    }
}

