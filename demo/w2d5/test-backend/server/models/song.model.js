const mongoose = require('mongoose')



const SongSchema = new mongoose.Schema({
    title :{
        type: String,
        minlength: [2, "Title must be at least 2 characters"],
        required: [true, "Title is required"]
    },
    rating:{
        type: Number,
        min : [0, "Rating must be positive"]
    },
}, {timestamps: true})


const Song = mongoose.model('Song', SongSchema)
module.exports = Song
