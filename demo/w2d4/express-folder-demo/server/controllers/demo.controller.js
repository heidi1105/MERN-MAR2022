
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


// getAll,getOne,  post, put, delete
module.exports.allUsers = (req, res)=>{
    res.json(users)
}

// getOne
module.exports.getOne = (req, res)=>{
    const id = req.params.id
    res.json(users[id])
}

// createUser
module.exports.createUser = (req, res)=>{
    users.push(req.body)
    res.json(req.body)
}


// update
module.exports.updateUser = (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json(user[id])
}

// delete
module.exports.deleteUser = (req, res)=>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({status: "ok"})
}