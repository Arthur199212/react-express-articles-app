import { ADD_ARTICLES, SHOW_LOADING, HIDE_LOADING, SET_PAGE,
  RESET_PAGE, SET_LIMIT, SENDING_REQUEST, GET_REQUEST,
  FAILED_REQUEST, SET_INITIAL_REEQUEST_INFO } from './constants'

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

export const postArticle = payload => dispatch => {
  dispatch(sendingRequert())

  fetch('http://localhost:8080/v1/articles', {
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
      dispatch(fetchArticles())
    }
  })
  .catch(err => {
    console.error(err)
    dispatch(failedRequest())
  })
}
