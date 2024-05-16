import { Button, TextField } from '@mui/material'
import React from 'react'

export const Register = () => {
  return (
    <div> 
      <br></br><br></br>
        <TextField id="outlined basics" label="username" variant="outlined"></TextField><br></br>
        <TextField id="outlined basics" label="password" variant="outlined"></TextField> <br></br>
        <Button variant="text">submit</Button>
    </div>
  )
}
export default Register
