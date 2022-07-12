const express = require("express")
const app = express()
const port = 8000



// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const Routes = require("./routes/users.routes")
Routes(app)



app.listen(port, ()=>console.log(`Listening on port: ${port}`))