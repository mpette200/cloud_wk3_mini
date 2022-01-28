const express = require('express')
const app = express()

const blogPostRoute = require('./routes/blogPosts')

app.use('/blogPosts', blogPostRoute)

app.listen(3000, () => {
    console.log('Server Listening ...')
})
