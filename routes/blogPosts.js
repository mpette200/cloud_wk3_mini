const express = require('express')
const router = express.Router()

const blogPost = require('../schema/blogPosts')

router.post('/', express.json(), async (req, res) => {
    // console.log(req.body)
    const postData = new blogPost({
        user: req.body.user,
        title: req.body.title,
        text: req.body.text,
        hashtag: req.body.hashtag,
        location: req.body.location,
        url: req.body.url
    })
    // try to insert...
    try {
        const postToSave = await postData.save()
        res.send(postToSave)
    } catch(err) {
        res.send({message: err})
    }
})

module.exports = router
