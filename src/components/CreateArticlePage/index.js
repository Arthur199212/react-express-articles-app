import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Typography, Button, Paper, CircularProgress } from '@material-ui/core'
import { postArticle, setInitialRequestInfo } from '../../redux/actions'
import styles from './styles'

const CreateArticlePage = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [bodyError, setBodyError] = useState(false)

  const { loading, error, success } = useSelector(({ createFormRequestInfo }) => createFormRequestInfo)

  const dispatch = useDispatch()

  const history = useHistory()

  const handleTitleChange = ({ target: { value } }) => setTitle(value)

  const handleBodyChange = ({ target: { value } }) => setBody(value)

  const handleSubmit = e => {
    e.preventDefault()

    setTitleError(!title)
    setBodyError(!body)

    if (!title || !body) return

    dispatch(
      postArticle({
        title,
        body
      })
    )

    setTitle('')
    setBody('')

    setTimeout(() => {
      history.push('/articles')
      dispatch(setInitialRequestInfo())
    }, 1000)
  }

  const handleCancel = () => {
    history.push('/articles')
  }

  return (
    <>
      <Paper
        style={styles.paper}
      >
        {(loading && !success && !error) && (
          <div style={styles.loading}>
            <CircularProgress />
          </div>
        )}
        
        {(!loading && !success) && (
          <>
            <Typography
              style={styles.marginBottom}
              variant='h4'
              gutterBottom
            >
              Create article
            </Typography>
            <form
              style={styles.formContainer}
              noValidate
              autoComplete='off'
              onSubmit={e => handleSubmit(e)}
            >
              <TextField
                style={styles.marginBottom}
                label='Title ...'
                value={title}
                onChange={handleTitleChange}
                error={titleError}
                helperText={titleError ? 'Fill out the field' : false}
                />
              <TextField
                label='Description ...'
                multiline
                rows='7'
                value={body}
                onChange={handleBodyChange}
                error={bodyError}
                helperText={bodyError ? 'Fill out the field' : false}
              />
              <div style={styles.buttonContainer}>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={e => handleSubmit(e)}
                >
                  Create
                </Button>
                <Button
                  style={styles.button}
                  variant='outlined'
                  color='secondary'
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </>
        )}

        {(!loading && success) && (
          <Typography
            style={styles.success}
            variant='h4'
            gutterBottom
          >
            Article has been created!
          </Typography>
        )}

        {(!loading && error) && (
          <Typography
            style={styles.error}
            variant='body1'
            gutterBottom
          >
            Try to fill out all the fields and submit again
          </Typography>
        )}
      </Paper>
    </>
  )
}

export default CreateArticlePage
