const UserController = require('./../controllers/users.controller')
module.exports= app =>{

    const users = [
        { firstName: "Reimu",  lastName: "Hakurei"    },
        { firstName: "Marisa", lastName: "Kirisame"   },
        { firstName: "Sanae",  lastName: "Kochiya"    },
        { firstName: "Sakuya", lastName: "Izayoi"     },
        { firstName: "Momiji", lastName: "Inubashiri" }
    ];


    app.get("/api/users", UserController.allUsers);
    
    app.post("/api/users", (req, res)=>{
        console.log(req.body)
        users.push(req.body)
        res.json({status:"ok"})
    })
    
    app.put("/api/users/:id", (req, res)=>{
        const id = req.params.id
        users[id] = req.body
        res.json({status:"ok"})
    })
    
    app.delete("/api/users/:id", (req, res)=>{
        const id = req.params.id
        users.splice(id, 1)
        res.json({status:"ok"})
    })

}

