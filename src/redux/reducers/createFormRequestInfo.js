import {
  SENDING_REQUEST,
  GET_REQUEST,
  FAILED_REQUEST,
  SET_INITIAL_REEQUEST_INFO
} from '../constants'

const initialState = {
  loading: false,
  error: false,
  success: false
}

export default (state = initialState, { type }) => {
  switch (type) {
    case SENDING_REQUEST: {
      return {
        loading: true,
        error: false,
        success: false
      }
    }
    case GET_REQUEST: {
      return {
        loading: false,
        error: false,
        success: true
      }
    }
    case FAILED_REQUEST: {
      return {
        loading: false,
        error: true,
        success: false
      }
    }
    case SET_INITIAL_REEQUEST_INFO: {
      return initialState
    }
    default:
      return state
  }
}
