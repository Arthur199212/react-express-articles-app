const express = require('express')
const Article = require('../../../../../models/article')

const router = express.Router()

router.get('/:articleId', async (req, res) => {
  const { articleId } = req.params

  try {
    const article = await Article.findById(articleId)
    res.json(article)
  } catch(err) {
    res.json({
      message: err
    })
  }
})

module.exports = router
