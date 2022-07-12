const Song = require('../models/song.model')


// get all
module.exports.allSongs = (req, res)=>{
    Song.find()
        .then(allSongs => res.json(allSongs))
        .catch(err=>res.json(err))
}

// get one
module.exports.findOneSong = (req, res) =>{
    Song.findOne({_id: req.params.id})
        .then(song=>res.json(song))
        .catch(err=>res.json(err))
}

// create one
module.exports.createSong = ( req, res)=>{
    Song.create(req.body)
        .then(newSong => res.json(newSong))
        .catch(err=>res.json(err))
}

module.exports.createSong2 = ( req, res)=>{
    const newSong = new Song(req.body)
    newSong.save()
        .then(newSong => res.json(newSong))
        .catch(err=>res.json(err))
}

// update one
module.exports.updateSong = (req, res)=>{
    Song.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
      .then(song => res.json(song))
      .catch(err=>res.json(err))

}

// delete one
module.exports.deleteSong = (req, res)=>{
    Song.deleteOne({_id: req.params.id})
        .then(res=> res.json(res))
        .catch(err=>res.json(err))
}

module.exports.createComment = (req, res)=>{
    Comment.create(req.body)
        .then()
        .catch()
}


