const express = require("express")
const app = express()
const port = 8000

require("./configs/mongoose.config")
    
// for posting data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const Routes = require('./routes/song.routes')
Routes(app)

// this needs to below the other code blocks
app.listen( 8000, () => console.log(`Listening on port: 8000`) );
