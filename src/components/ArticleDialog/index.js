import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticle, setInitialRequestInfo } from '../../redux/actions'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core'

const ArticleDialog = ({ articleId }) => {
  const [open, setOpen] = useState(false)
  const [selectedArticleID, setSelectedArticleID] = useState('')

  const { data: { title, body, created_at = '', updated_at= '' } } = useSelector(({ article }) => article)

  const dispatch = useDispatch()

  useEffect(() => {
    if (articleId === selectedArticleID) dispatch(fetchArticle(articleId))
  }, [selectedArticleID])

  const handleClickOpen = () => {
    setOpen(true)
    setSelectedArticleID(articleId)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedArticleID('')
    dispatch(setInitialRequestInfo())
  }

  return (
    <div>
      <Button color='primary' onClick={handleClickOpen}>
        View
      </Button>
      <Route exact path='/articles'>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <Typography variant='subtitle1'>
              {body}
            </Typography>
          </DialogContent>
          <DialogActions style={{display: 'flex', justifyContent: 'space-around', alignItems: 'baseline'}}>
            <Typography style={{marginTop: '1rem'}} variant='body2'>
              {`Created: ${created_at.slice(11, 16)} ${created_at.slice(0, 10)}`}
            </Typography>
            <Typography style={{marginTop: '1rem'}} variant='body2'>
              {`Updated: ${updated_at.slice(11, 16)} ${updated_at.slice(0, 10)}`}
            </Typography>
            <Button onClick={handleClose} color='primary'>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Route>
    </div>
  )
}

export default ArticleDialog
