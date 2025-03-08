const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UsersModel = require('./models/users.js')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ianguillen30:its120@cluster0.pve1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {app.listen(3001, () => {
        console.log("server is running")
    })})
    .catch((error) => {console.log(error)})

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(error => res.json(error))
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("Password is incorrect")
            }
        } else{
            res.json("No email exists")
        }
    })
})