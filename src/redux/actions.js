import { ADD_ARTICLES, SHOW_LOADING, HIDE_LOADING,
  SET_PAGE, RESET_PAGE, SET_LIMIT } from './constants'

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

export const fetchArticles = () => (dispatch, getState) => {
  const { searchData: { page, limit } } = getState()

  dispatch(showLoading())

  fetch(`http://localhost:8080/v1/articles?page=${page}&limit=${limit}`)
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
