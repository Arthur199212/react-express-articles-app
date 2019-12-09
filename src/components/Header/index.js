import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Link to='/articles'>
            <Typography variant='h6'>
              APP LOGO
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
