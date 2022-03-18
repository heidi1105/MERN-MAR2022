const mongoose = require("mongoose")

const PetSchema = new mongoose.Schema({
    petname : {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters long"]
    },
    haircolor: {
        type: String,
        required: [true, "I believe your pet has hair"],
        minlength: [3, "Hair color must be at least 3 characters long"]        
    },
    age: {
        type: Number, // Boolean, Array
        min: [0 , "Age must be a positive number"]
    }
}, {timestamps : true})


// OPTION 1
// const Pet = mongoose.model('Pet', PetSchema)
// module.exports = Pet

// OPTION 2
module.exports.Pet = mongoose.model('Pet', PetSchema)

