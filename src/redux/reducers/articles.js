import { ADD_ARTICLES } from '../constants'

const initialState = {}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ARTICLES: {
      return payload
    }
    default:
      return state
  }
}
