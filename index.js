const express = require('express')
const app = express() // Creating an instance of express.

app.get('/', (request, response) => {
    response.send('Response here')
})