const express = require('express'); //Import the express dependency
const mongoose = require('mongoose')
require('dotenv').config()          // Hide those environment variables.

const queryRoutes = require('./routes/queries');
////const feedRoutes = require('./routes/feed.js')

// Express App
const app = express();              //Instantiate an express app, the main work horse of this server

// Middleware 
app.use(express.json())
app.use((req, res, next ) => {
    console.log(req.path, req.method)
    next()
})

// // routes 
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome'})
// })


//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {            //server starts listening for any attempts from a client to connect at port: {port}
            console.log('Now listening on port', process.env.PORT ); 
        }) 
    })
    .catch((error) => {
        console.log(error)
    })

app.use('/api/queries/', queryRoutes)
//app.use('/api/feed/', feedRoutes)
