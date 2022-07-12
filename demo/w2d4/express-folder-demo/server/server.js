const express = require("express")
console.log(express)
const app = express()
const port = 8000


    
// for posting data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const Routes = require('./routes/demo.routes')
Routes(app)

// this needs to below the other code blocks
app.listen( 8000, () => console.log(`Listening on port: 8000`) );
