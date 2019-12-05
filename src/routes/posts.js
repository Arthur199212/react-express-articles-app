const express = require('express')

const Post = require('../models/post')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)    
  } catch(err) {
    res.json({
      message: err
    })
  }
})

router.post('/', async (req, res) => {
  const { title, body } = req.body

  const post = new Post({
    title,
    body
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch(err) {
    res.json({
      message: err
    })
  }
})

module.exports = router
