const DemoController = require('./../controllers/demo.controller')

module.exports = (app)=>{
    // ROUTES + controller

    app.get("/api/users", DemoController.allUsers)
    app.get("/api/users/:id", DemoController.getOne)
    app.post("/api/users", DemoController.createUser)
    app.put("/api/users/:id", DemoController.updateUser)
    app.delete("/api/users/:id", DemoController.deleteUser)
    
}

