import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default ({ destinationPath, children }) => {
  let history = useHistory()

  function onClick() {
    history.push(destinationPath)
  }

  return (
    <ListItem button onClick={onClick}>
       {children}
    </ListItem>
  )
}
