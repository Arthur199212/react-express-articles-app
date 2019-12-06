const express = require('express')
const Article = require('../../../../../models/article')

const router = express.Router()

router.get('/:articleId', async (req, res) => {
  const { articleId } = req.params

  try {
    const article = await Article.findById(articleId)
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
