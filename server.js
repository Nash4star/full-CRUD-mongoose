/////////////////////////////////
// import dependencies
/////////////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')
// We no longer need this reference because it lives in the fruit controller now
// const Fruit = require('./models/fruit')
// now that we're using controllers as they should be used
// we need to require our routers
const FruitRouter = require('./controllers/fruit')
const UserRouter = require('./controllers/user')
const HomeRouter = require('./controllers/home')
const CommentRouter = require('./controllers/comment')
const middleware = require('./utils/middleware')

////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////
const app = require('liquid-express-views')(express())

////////////////////////////////////////////
// Middleware
////////////////////////////////////////////
middleware(app)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// register our routes here
// send all '/fruits' routes to the Fruit Router
app.use('/fruits', FruitRouter)
app.use('/comments', CommentRouter)
app.use('/user', UserRouter)
app.use('/', HomeRouter)

// old home, now we're using homerouter
// app.get('/', (req, res) => {
//     res.send('your server is running, better go catch it')
// })


////////////////////////////////////////////
// Server Listener
////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})