const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Get")
})

app.post('/', (req, res) => {
    res.send("Post")
})

app.listen(8080);
