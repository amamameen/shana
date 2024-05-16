import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const StateBasics = () => {
  var [name,frame]=useState("my evandi")
  return (
    <div style={{margin:'50px'}}><br></br><br></br><br></br>
      
      <Typography variant="h6"> Welcome to {name}</Typography>
      <TextField varient="outline"/>

      
      </div>
  )
}
export default StateBasics

