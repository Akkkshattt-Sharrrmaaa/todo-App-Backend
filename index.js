const express = require('express')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middleware to parser request body
// this is used instead of body-parser
app.use( express.json() )


// import routes
const todoRoutes = require( './routes/todos')

// mount routes
app.use( "/api/v1" , todoRoutes)

// start server

app.listen( PORT , ()=>{
    console.log(`Server started at : ${PORT}`)
})

//connect to db
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get( "/" , ( request , response ) => {
    response.send(` <H1> This is homepage bbyghorl </H1>`)
})