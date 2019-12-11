import {
  ADD_ARTICLE,
  SHOW_ARTICLE_LOADING,
  HIDE_ARTICLE_LOADING,
  SET_INITIAL_REEQUEST_INFO
} from '../constants'

const initialState = {
  data: {
    title: '',
    body: ''
  },
  loading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ARTICLE: {
      return {
        data: payload
      }
    }
    case SHOW_ARTICLE_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case HIDE_ARTICLE_LOADING: {
      return {
        ...state,
        loading: false
      }
    }
    case SET_INITIAL_REEQUEST_INFO: {
      return initialState
    }
    default:
      return state
  }
}
