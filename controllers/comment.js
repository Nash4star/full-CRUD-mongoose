////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const mongoose = require('mongoose')

// we need our Fruit MODEL because comments are ONLY a schema
// so we'll run queries on fruits, and add in comments
const Fruit = require('../models/fruit')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// only need two routes for comments right now
// POST -> to create a comment
router.post('/:fruitId', (req, res) => {
    const fruitId = req.params.fruitId
    console.log('first comment body', req.body)
    
    // we'll adjust req.body to include an author
    // the author's id will be the logged in user's id
    req.body.author = req.session.userId
    console.log('updated comment body', req.body)
    // we'll find the fruit with the fruitId
    Fruit.findById(fruitId)
        .then(fruit => {
            // then we'll send req.body to the comments array
            fruit.comments.push(req.body)
            // save the fruit
            return fruit.save()
        })
        .then(fruit => {
            // redirect
            res.redirect(`/fruits/${fruit.id}`)
        })
        // or show an error if we have one
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})

// DELETE -> to destroy a comment

////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router