const express = require('express')
const Article = require('../../../../../models/article')

const router = express.Router()

router.put('/:articleId', async (req, res) => {
  const { articleId } = req.params
  const { title, body } = req.body

  // TODO Validation

  try {
    const article = await Article.updateOne({ _id: articleId }, {
      $set: {
        title,
        body
      }
    })

    res.json(article)
  } catch(err) {
    // TODO send if problem with `title` or `body`
    res.json({
      message: err
    })
  }
})

module.exports = router
