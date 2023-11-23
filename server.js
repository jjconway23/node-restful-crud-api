const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

const PORT = 3000

app.use(express.json())
app.get('/', (req, res)=> {
    res.send('Hello Node API (2)')
})

app.get('/blog', (req,res)=> {
    res.send("My Blog")
})
app.route('/products')
    .get(async (req, res)=> {
        try {
            const products = await Product.find({})
            res.status(200).json(products)
        } catch (error) {
            console.log(error.message)
            res.status(500).json({message:e.message})
        }
    })
    post( async (req, res)=> {
        try{
            const product = await Product.create(req.body)
            res.status(200).send(product)
        }
        catch (e) {
            console.log(e.message)
            res.status(500).json({message:e.message})
        }

    })
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