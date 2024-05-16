import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            
                <Typography variant="h3"> Welcome Home </Typography> &nbsp;
                <Button variant="contained">
                <Link to='/reg'> click to login</Link>
                </Button>

                <Button variant="contained">
                <Link to='/u'> mainpage</Link>
                </Button>
                <Button variant="contained">
                <Link to='/f'> opinion</Link>
                </Button>
                <Button variant="contained">
                <Link to='/w'> RAN</Link>
                </Button>
                <Button variant="contained">
                <Link to='/s'> view </Link>
                </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Navbar