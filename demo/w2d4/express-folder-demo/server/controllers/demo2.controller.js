
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = {
    allUsers : (req, res) =>{
        res.json(users)
    },
    getOne : (req, res)=>{
        const id = req.params.id
        res.json(users[id])
    },
    createUser : (req, res)=>{
        users.push(req.body)
        res.json(req.body)
    },
    updateUser : (req, res)=>{
        const id = req.params.id
        users[id] = req.body
        res.json(user[id])
    },
    deleteUser : (req, res)=>{
        const id = req.params.id
        users.splice(id, 1)
        res.json({status: "ok"})
    }


}


