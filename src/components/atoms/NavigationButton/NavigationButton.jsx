import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default ({ destinationPath, label }) => {
  let history = useHistory()

  function onClick() {
    history.push(destinationPath)
  }

  return (
    <Button color="inherit" onClick={onClick}>
      {label}
    </Button>
  )
}
