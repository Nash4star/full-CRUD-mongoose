/////////////////////////////////
//     import dependencies     //
/////////////////////////////////

const mongoose = require('./connection')

/////////////////////////////////
//   define our fruits model   //
/////////////////////////////////

// pull the schema and model constructors from mongoose
// we're going to use something called destructuring to accomplish this
const { Schema, model } = mongoose

// Make a user Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// make a user model
const User = model('Uder', userSchema)


/////////////////////////////////
//    export our user model    //
/////////////////////////////////
module.exports = User