const express = require('express')
const getArticles = require('./articles/getArticles')
const postArticle = require('./articles/postArticle')
const getArticle = require('./articles/id/getArticle')
const editArticle = require('./articles/id/editArticle')
const deleteArticle = require('./articles/id/deleteArticle')

const router = express.Router()

router.get('/', getArticles)

router.post('/', postArticle)

router.put('/:articleId', editArticle)

router.get('/:articleId', getArticle)

router.delete('/:articleId', deleteArticle)

module.exports = router
