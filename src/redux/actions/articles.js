import { ADD_ARTICLES, SHOW_LOADING, HIDE_LOADING, SET_PAGE,
  RESET_PAGE, SET_LIMIT, SET_INITIAL_REEQUEST_INFO } from '../constants'

import { URL } from '../../api'

const addArticles = payload => ({
  type: ADD_ARTICLES,
  payload
})

const showLoading = () => ({
  type: SHOW_LOADING
})

const hideLoading = () => ({
  type: HIDE_LOADING
})

export const setPage = payload => ({
  type: SET_PAGE,
  payload
})

export const resetPage = () => ({
  type: RESET_PAGE
})

export const setLimit = payload => ({
  type: SET_LIMIT,
  payload
})

export const setInitialRequestInfo = () => ({
  type: SET_INITIAL_REEQUEST_INFO
})

export const fetchArticles = () => (dispatch, getState) => {
  const { searchData: { page, limit } } = getState()

  dispatch(showLoading())

  fetch(`${URL}?page=${page}&limit=${limit}`)
  .then(res => res.json())
  .then(data => {
    dispatch(addArticles(data))
    dispatch(hideLoading())
  })
  .catch(err => {
    console.error(err)
    dispatch(hideLoading())
  })
}
