const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = 3000

app.use(express.json())
app.get('/', (req, res)=> {
    res.send('Hello Node API (2)')
})

app.get('/blog', (req,res)=> {
    res.send("My Blog")
})

app.post('/products', (req, res)=> {
    try{
        console.log(req.body);
        res.send(req.body)
    }
    catch (e) {
        console.log(e)
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