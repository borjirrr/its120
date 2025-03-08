const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const UsersSchema = new mongoose.Schema({
    userID: { 
        type: String, 
        default: () => uuidv4(), // Ensure it calls the function
        unique: true 
    },
    username: String, 
    email: String,
    password: String
})

const UsersModel = mongoose.model("users", UsersSchema)
module.exports = UsersModel