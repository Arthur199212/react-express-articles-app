const express = require('express')
const Article = require('../../../../models/article')

const router = express.Router()

router.post('/', async (req, res) => {
  const { title, body } = req.body

  // TODO Validation

  const article = new Article({
    title,
    body
  })

  try {
    const savedPost = await article.save()
    res.json(savedPost)
  } catch(err) {
    res.json({
      // TODO send if problem with `title` or `body`
      message: err
    })
  }
})

module.exports = router
