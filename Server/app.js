require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModal = require('./models/User')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.Mongoose)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    UserModal.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})

app.post('/create', (req,res) =>{
    UserModal.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findById({_id:id})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})

app.put('/update/:id', (req, res) =>{
    const id = req.params.id;
    // const [name,email,age] = req.body
    UserModal.findByIdAndUpdate({_id:id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    } )
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
})

app.delete('/delete/:id', (req, res) =>{
    const id = req.params.id;
    UserModal.findByIdAndDelete({_id:id})
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
})
 
app.listen(process.env.Port,() => console.log('listening on port'));