import { combineReducers } from 'redux'
import articles from './articles'
import searchData from './searchData'
import createFormRequestInfo from './createFormRequestInfo'

export default combineReducers({ 
  articles,
  searchData,
  createFormRequestInfo
 })
