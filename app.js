const express = require("express")
const mongoose = require("mongoose") 
require('dotenv').config()

const userRoutes = require("./routes/userRoute")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const app = express()
const port = process.env.PORT || 8080
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method')) // PUT, DELETE methods

// connection DB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch((err) => console.log(err))

// def of routes
app.use('/users', userRoutes)

// engine
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

// start the server
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})