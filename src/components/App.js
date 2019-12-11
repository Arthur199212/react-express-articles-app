import 'core-js'
import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { CssBaseline, Container } from '@material-ui/core'

import Header from './Header'
import ArticlesList from './ArticlesList'
import CreatePage from './CreateArticlePage'
import EditArticlePage from './EditArticlePage'
import './app.css'

const App = () => {

  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth='lg'>

      <Switch>
        <Redirect exact from='/' to='/articles' />
        <Route exact path='/articles'>
          <ArticlesList />
        </Route>
        <Route exact path='/articles/create'>
          <CreatePage />
        </Route>
        <Route path='/articles/:articleId/edit'>
          <EditArticlePage />
        </Route>
      </Switch>
      </Container>
    </Router>
  )
}

export default App
