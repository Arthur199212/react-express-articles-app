const express = require('express')
const Article = require('../../../../../models/article')

const router = express.Router()

router.put('/:articleId', async (req, res) => {
  const { articleId } = req.params
  const { title, body } = req.body

  // Basic validation
  if (!title) {
    res.json({
      errors: [{
        field: 'title',
        error: 'title is required'
      }]
    })
  } else if (!body) {
    res.json({
      errors: [{
        field: 'body',
        error: 'body is required'
      }]
    })
  }

  try {
    const article = await Article.updateOne({ _id: articleId }, {
      $set: {
        title,
        body
      }
    })

    res.json(article)
  } catch(err) {
    if (err.name === 'CastError') {
      res.status(404).json({
        errors: [{
          field: 'id',
          error: 'Not Found'
        }]
      })
    } else {
      res.json({
        message: err
      })
    }
  }
})

module.exports = router
