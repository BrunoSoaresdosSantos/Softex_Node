const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send("Get")
})

app.post('/', (req, res) => {
    res.send("Post")
})

app.listen(8080);