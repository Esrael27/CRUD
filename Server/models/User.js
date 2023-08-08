const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModal = mongoose.model("users", UserSchema)
module.exports = UserModal