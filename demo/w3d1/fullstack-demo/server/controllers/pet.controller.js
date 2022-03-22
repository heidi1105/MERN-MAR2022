const {Pet}  = require("./../models/pet.model")

module.exports.message = (req, res) => {
    res.json("message from backend")
}


// get all
module.exports.allPets = (req, res) => {
    Pet.find()
        .then(pets => res.json(pets))// successful response
        .catch(err => res.status(400).json(err)) // unsuccessful response
}

// get one
module.exports.onePet = (req, res) => {
    const id = req.params.id // naming of the params depends on the routes
    Pet.findOne({ _id: id }) // _id (from mongoDB) id (from params id)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
}


// create 
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(response => res.json(response)) // successful create
        .catch(err => res.status(400).json(err)) // unsuccessful create
}

// update - getOne + create
module.exports.updatePet = (req, res) => {
    const id = req.params.id
    Pet.findOneAndUpdate(
        { _id: id }, // filter out the pet with the id
        req.body, // the data to be updated
        { new: true, runValidators: true } // options
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

}

// delete
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}





