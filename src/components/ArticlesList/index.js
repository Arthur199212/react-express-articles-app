import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Paper, TablePagination, Button, Table, TableBody, TableCell, TableHead,
  TableRow, Fab, LinearProgress, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { fetchArticles, setPage, setLimit, resetPage } from '../../redux/actions'
import ArticleDialog from '../ArticleDialog'
import styles from './styles'

const ArticlesList = () => {
  const articles = useSelector(({ articles }) => articles)
  const { page, limit } = useSelector(({ searchData }) => searchData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [page, limit])

  const handleChangePage = (event, newPage) => {
    dispatch(setPage(newPage + 1))
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
                  {`${body.slice(0, 70)} ...`}
                </TableCell>
                <TableCell>{id}</TableCell>
                <TableCell align='center' style={styles.actions} >
                  <Link to={`/articles/${id}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                  <ArticleDialog />
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
          page={page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  )
}

export default ArticlesList
