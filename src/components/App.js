import 'core-js'
import React from 'react'
import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { CssBaseline, Container, Typography } from '@material-ui/core'

import Header from './Header'
import ArticlesList from './ArticlesList'

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
          <Typography variant='h4' gutterBottom style={{margin: '2rem 0.5rem 1rem'}}>
            Articles
          </Typography>
          <ArticlesList />
        </Route>
        <Route path='/articles/create'>
          <Typography variant='h4' gutterBottom style={{margin: '2rem 0.5rem 1rem'}}>
            Create article route
          </Typography>
        </Route>
        <Route path='/articles/:articleId/edit'>
          <Typography variant='h4' gutterBottom style={{margin: '2rem 0.5rem 1rem'}}>
            Edit article route
          </Typography>
        </Route>
      </Switch>
      </Container>
    </Router>
  )
}

export default App
