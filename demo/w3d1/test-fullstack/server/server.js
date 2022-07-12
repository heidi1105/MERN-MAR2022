// import all dependencies
const express = require("express")
const cors = require("cors") // CORS
const app = express()

// config mongoose
app.use(cors())
require("./configs/mongoose.config")

// express config for post
app.use(express.json(), express.urlencoded({ extended: true }));

// get the routes
// option1 
// const Routes = require("./routes/pet.routes")
// Routes(app)
// option 2
require("./routes/pet.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));