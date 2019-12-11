import { combineReducers } from 'redux'
import articles from './articles'
import searchData from './searchData'
import formRequestInfo from './formRequestInfo'
import article from './article'

export default combineReducers({ 
  articles,
  searchData,
  formRequestInfo,
  article
 })
