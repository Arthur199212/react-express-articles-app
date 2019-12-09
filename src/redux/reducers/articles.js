import { ADD_ARTICLES, SHOW_LOADING, HIDE_LOADING } from '../constants'

const initialState = {
  data: {
    articles: [],
    count: 0,
    page: 1,
    limit: 10
  },
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ARTICLES: {
      return {
        data: payload
      }
    }
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case HIDE_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
    default:
      return state
  }
}
