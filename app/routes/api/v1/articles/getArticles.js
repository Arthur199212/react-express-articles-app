const express = require('express')
const Article = require('../../../../models/article')
const { splitByChunks, transformResDB } = require('../../../../helpers')

const router = express.Router()

router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query

  const validLimit = Number(limit) <= 10 && Number(limit) > 0 ? Number(limit) : 10

  try {
    const articlesDB = await Article.find()
    
    const transformedArticles = transformResDB(articlesDB)
    
    const articles = splitByChunks(transformedArticles, validLimit)

    const data = {
      count: articlesDB.length,
      page: Number(page),
      limit: validLimit,
      articles: articles[page - 1]
    }

    res.json(data)
  } catch(err) {
    res.json({
      message: err
    })
  }
})

module.exports = router
