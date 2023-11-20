const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('Hello Node API')
})

const PORT = 3000
app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})