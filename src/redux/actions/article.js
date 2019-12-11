import { SENDING_REQUEST, GET_REQUEST,
  FAILED_REQUEST, SET_INITIAL_REEQUEST_INFO, ADD_ARTICLE,
  SHOW_ARTICLE_LOADING, HIDE_ARTICLE_LOADING } from '../constants'

import { URL } from '../../api'

const sendingRequert = () => ({
  type: SENDING_REQUEST
})

const getRequest = () => ({
  type: GET_REQUEST
})

const failedRequest = () => ({
  type: FAILED_REQUEST
})

export const setInitialRequestInfo = () => ({
  type: SET_INITIAL_REEQUEST_INFO
})

export const postArticle = payload => dispatch => {
  dispatch(sendingRequert())

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => {
    if (data.errors) {
      dispatch(failedRequest())
    } else {
      dispatch(getRequest())
    }
  })
  .catch(err => {
    console.error(err)
    dispatch(failedRequest())
  })
}

const addArticle = payload => ({
  type: ADD_ARTICLE,
  payload
})

const showArticleLoading = () => ({
  type: SHOW_ARTICLE_LOADING
})

const hideArticleLoading = () => ({
  type: HIDE_ARTICLE_LOADING
})

export const fetchArticle = payload => dispatch => {
  dispatch(showArticleLoading())

  fetch(`${URL}/${payload}`)
  .then(res => res.json())
  .then(data => {
    dispatch(addArticle(data))
    dispatch(hideArticleLoading())
  })
  .catch(err => {
    console.error(err)
    dispatch(hideArticleLoading())
  })
}

export const putArticle = ({ articleId, articleData }) => dispatch => {
  dispatch(sendingRequert())

  fetch(`${URL}/${articleId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  })
  .then(res => res.json())
  .then(data => {
    if (data.errors) {
      dispatch(failedRequest())
    } else {
      dispatch(getRequest())
    }
  })
  .catch(err => {
    console.error(err)
    dispatch(failedRequest())
  })
}
