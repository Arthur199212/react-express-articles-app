import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticle } from '../../redux/actions'
import ArticleForm from '../ArticleForm'

const EditArticlePage = () => {
  const { articleId } = useParams()
  const { data: { title, body } } = useSelector(({ article }) => article)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticle(articleId))
  }, [])

  const defaultValue = {
    title,
    body
  }

  return (
    <ArticleForm edit={true} defaultValue={defaultValue} articleId={articleId} />
  )
}

export default EditArticlePage
