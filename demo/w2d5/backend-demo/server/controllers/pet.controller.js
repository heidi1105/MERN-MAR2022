// OPTION 1
// const Pet = require("./../models/pet.model")

// OPTION 2
const { Pet } = require("./../models/pet.model")

// get all
module.exports.allPets = (req, res) => {
    Pet.find()
        .then(pets => res.json(pets))// successful response
        .catch(err => res.json(err)) // unsuccessful response
}

// get one
module.exports.onePet = (req, res) => {
    const id = req.params.id
    Pet.findOne({ _id: id })
        .then(pet => res.json(pet))
        .catch(err => res.json(err))
}

// create 

// option1
module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// option 2
module.exports.createPet2 = (req, res) => {
    const newPet = new Pet(req.body)
    newPet.save()
        .then(response => res.json(response))
        .catch(err => res.json(err))
}


// update - getOne + create
module.exports.updatePet = (req, res) => {
    const id = req.params.id
    Pet.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))

}

// delete
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}