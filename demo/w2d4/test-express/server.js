const express = require("express")
const app = express()
const port = 8000
const {faker} = require('@faker-js/faker')


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});

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

app.get("/api/randomName", (req, res)=>{
    const randomName = faker.name.findName()
    res.json({firstName: randomName})
})


app.listen(port, ()=>console.log(`Listening on port: ${port}`))