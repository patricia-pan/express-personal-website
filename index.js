const express = require('express')
const app = express() // Creating an instance of express.

app.get('/', (request, response) => {
    response.send('This is the Home Page!')
})

app.get('/about', (request, response) => {
    response.send("Some stuff about me will go here.")
})

app.get('/blog', (request, response) => {
    response.send("A directory of all my blog posts will go here.")
})

// http://localhost:3000/
app.listen(3000, () => console.log("Listening on port 3000!"))