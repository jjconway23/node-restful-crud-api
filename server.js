const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Home Page')
})
const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Server listening on port number ${PORT}`)
})