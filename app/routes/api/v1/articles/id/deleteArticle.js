const express = require('express')
const Article = require('../../../../../models/article')

const router = express.Router()

router.delete('/:articleId', async (req, res) => {
  const { articleId } = req.params

  try {
    const removedArticle = await Article.deleteOne({ _id: articleId })
    res.json(removedArticle)
  } catch(err) {
    res.json({
      message: err
    })
  }
})

module.exports = router
