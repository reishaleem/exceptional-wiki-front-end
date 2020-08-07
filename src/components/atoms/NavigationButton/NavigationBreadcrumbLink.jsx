import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
}));

export default ({ destinationPath, children}) => {
  let history = useHistory()
  const classes = useStyles();


  function onClick() {
    history.push(destinationPath)
  }

  return (
    <Link color="inherit" href={destinationPath} onClick={onClick} className={classes.link}>
        {children}
    </Link>
  )
}
