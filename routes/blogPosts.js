const express = require('express')
const router = express.Router()

const BlogPost = require('../dataModel/blogPostsMock')

router.post('/', express.json(), async (req, res) => {
    // console.log(req.body)
    const postData = new BlogPost({
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

router.get('/', async(req,res) => {
    try {
        const getPosts = await BlogPost.find()
        res.send(getPosts)
    } catch(err) {
        res.send({message:err})
    }
})

router.get('/one', async(req,res) => {
    try {
        const getPosts = await BlogPost.find().findOne()
        res.send(getPosts)
    } catch(err) {
        res.send(`ERROR: ${err.message}<br>${err.stack}`)
    }
})

module.exports = router
