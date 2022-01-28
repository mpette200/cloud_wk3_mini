const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    console.log('new blog post not implemented')
    res.send('new blog post not implemented')
})

module.exports = router
