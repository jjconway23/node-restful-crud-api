const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute')

const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extened:false}))

app.use('/api', productRoute)
mongoose
    .connect(MONGO_URL)
    .then(()=> {
        console.log("Connected to MongoDB")
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`)
        })
    })
    .catch( (e)=> {
        console.log(e)
    })