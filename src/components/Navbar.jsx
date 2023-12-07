import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar color='secondary'>
        <Toolbar>
            <Typography variant='h5' sx={{flexGrow:1}}>CRUD API</Typography>
            <Typography variant='h6'>Version 1.0</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar