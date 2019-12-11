import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles, setPage, setLimit, resetPage } from '../../redux/actions'
import {
  Paper,
  TablePagination,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Fab,
  LinearProgress,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import ArticleDialog from '../ArticleDialog'
import { useQuery } from '../../hooks'
import styles from './styles'

const ArticlesList = () => {
  const articles = useSelector(({ articles }) => articles)
  const { page, limit } = useSelector(({ searchData }) => searchData)

  const query = useQuery()
  const history = useHistory()
  const dispatch = useDispatch()
  const matches = useMediaQuery('(min-width:1100px)')

  useEffect(() => {
    const pageQuery = Number(query.get('page')) >= 0 ? Number(query.get('page')) : 0
    if (pageQuery && page !== pageQuery) dispatch(setPage(pageQuery))

    dispatch(fetchArticles())
  }, [page, limit])

  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage + 1))
    history.push(`/articles?page=${newPage + 1}`)
  }

  const handleChangeRowsPerPage = event => {
    dispatch(setLimit(parseInt(event.target.value, 10)))
    dispatch(resetPage())
  }

  return (
    <Paper style={styles.paper}>
      <Typography
        variant='h4'
        gutterBottom
      >
        Articles
      </Typography>
      <div>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            <TableCell>Id</TableCell>
            <TableCell align='center'>
              <Link to='/articles/create'>
                <Fab size='small' color='primary' aria-label='create article'>
                  <AddIcon />
                </Fab>
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!articles.loading && (
            articles.data.articles.map(({ id, title, body }) => (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell>
                  {matches && (body.length > 65 ? `${body.slice(0, 65)} ...` : body)}
                  {!matches && (body.length > 15 ? `${body.slice(0, 15)} ...` : body)}
                </TableCell>
                <TableCell>{id}</TableCell>
                <TableCell align='center' style={styles.actions} >
                  <Link to={`/articles/${id}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                  <ArticleDialog articleId={id} />
                </TableCell>
              </TableRow>
          )))}
        </TableBody>
      </Table>
      {articles.loading && <LinearProgress />}
      </div>
      <TablePagination
          rowsPerPageOptions={[5, 10]}
          component='div'
          count={articles.data.count}
          rowsPerPage={limit}
          page={articles.data.page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  )
}

export default ArticlesList
