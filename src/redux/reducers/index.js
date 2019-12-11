import { combineReducers } from 'redux'
import articles from './articles'
import searchData from './searchData'
import createFormRequestInfo from './createFormRequestInfo'
import article from './article'

export default combineReducers({ 
  articles,
  searchData,
  createFormRequestInfo,
  article
 })
