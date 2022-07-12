const PetController = require('../controllers/pet.controller')

module.exports = app =>{
    app.get("/api/message", PetController.message)
    app.get("/api/pets", PetController.allPets)
    app.get("/api/pets/:id", PetController.onePet)
    app.post("/api/pets", PetController.createPet)
    app.put("/api/pets/:id", PetController.updatePet)
    app.delete("/api/pets/:id", PetController.deletePet)
}