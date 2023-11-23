const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();

const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extened:false}))

app.route('/products/:id')
    .get(async(req,res)=> {
        try {
            const {id} = req.params
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            console.log(error.message)
            res.status(500).json({message:error.message})
        }

    })
    .put(async (req,res)=> {
        try {
            const {id} = req.params
            const product = await Product.findByIdAndUpdate(id, req.body)
            if(!product){
                return res.status(404).json({message: `cannot find any product with ID ${id}`})
            }
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct)

        } catch (error) {
            console.log(error.message)
            res.status(500).json({message:error.message})
        }
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
    .post( async (req, res)=> {
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