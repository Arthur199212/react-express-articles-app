import { SET_PAGE, RESET_PAGE, SET_LIMIT } from '../constants'

const initialState = {
  page: 1,
  limit: 10
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE: {
      return {
        ...state,
        page: payload
      }
    }
    case RESET_PAGE: {
      return {
        ...state,
        page: initialState.page
      }
    }
    case SET_LIMIT: {
      return {
        ...state,
        limit: payload
      }
    }
    default:
      return state
  }
}
