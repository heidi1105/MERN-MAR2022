const express = require("express")
const app = express()
const port = 8000

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
// for posting data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// ROUTES + controller
// getAll,getOne,  post, put, delete
app.get("/api/users", (req, res)=>{
    res.json(users)
})

// getOne
app.get("/api/users/:id", (req, res)=>{
    const id = req.params.id
    res.json(users[id])
})

// createUser - post
app.post("/api/users", (req, res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
})

// update - getOne + post
app.put("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json(users[id])
})

// delete [ "Heidi", "Pepper", "John", "Edward"] splice(1, 2)
app.delete("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({status: "ok"})
})

app.get("/api", (req, res)=>{
    res.json("Hello World")
})


// this needs to below the other code blocks
app.listen( 8000, () => console.log(`Listening on port: 8000`) );
