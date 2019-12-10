const express = require('express')
const Article = require('../../../../models/article')

const router = express.Router()

router.post('/', async (req, res) => {
  const { title, body } = req.body

  const article = new Article({
    title,
    body
  })

  try {
    const savedPost = await article.save()
    res.json(savedPost)
  } catch(err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({
        errors: [{
          field: err.errors.body.path,
          error: `${err.errors.body.path} is required`
        }]
      })
    } else {
      res.status(400).json({
        message: err
      })
    }
  }
})

module.exports = router
