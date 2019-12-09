import { combineReducers } from 'redux'
import articles from './articles'
import searchData from './searchData'

export default combineReducers({ 
  articles,
  searchData
 })
