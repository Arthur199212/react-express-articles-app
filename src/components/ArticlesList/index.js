import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Paper, TablePagination, Button, Table, TableBody,
TableCell, TableHead, TableRow, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import ArticleDialog from '../ArticleDialog'

// * Fake data *
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]
// * --------- *

const ArticlesList = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)

  useEffect(() => {
    // TODO fetch data
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Paper style={{ marginBottom: '1rem', overflowX: 'auto', width: '100%' }}>
      <div>
      <Table style={{ minWidth: 650 }}>
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
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet ...
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell align='center' style={{ display: 'flex', justifyContent: 'center' }} >
                <Button>Edit</Button>
                <ArticleDialog />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <TablePagination
          rowsPerPageOptions={[5, 10]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>
  )
}

export default ArticlesList
