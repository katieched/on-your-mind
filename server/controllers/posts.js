const express = require('express');
const router = express.Router();
const Post = require('../models/posts')


//get route to show all posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.all;
        res.status(200).json({ allPosts })
    } catch (err) {
        res.status(500).json({ err })
    }
})

//get route to show specific post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(parseInt(req.params.id));
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({ err })
    }
})
//post route to create post

router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json({ err })
    }
})

module.exports = router