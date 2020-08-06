import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup, Tab, Tabs } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, Link} from 'react-router-dom'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


export default () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let history = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <NavigationButton destinationPath='/about' label='About'></NavigationButton>
          <NavigationButton destinationPath='/about' label='Features'></NavigationButton>
          <NavigationButton destinationPath='/about' label='FAQ'></NavigationButton>
          <NavigationButton destinationPath='/about' label='Sign Up'></NavigationButton>
          <NavigationButton destinationPath='/about' label='Sign In'></NavigationButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}