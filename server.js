const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res)=> {
    res.send('Hello Node API (2)')
})

app.get('/blog', (req,res)=> {
    res.send("My Blog")
})
const PORT = 3000

mongoose
    .connect('mongodb+srv://root:admin@node-crud-rest-api.fqs1jel.mongodb.net/node-rest-crud-api?retryWrites=true&w=majority')
    .then(()=> {
        console.log("Connected to MongoDB")
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch( (e)=> {
        console.log(e)
    })