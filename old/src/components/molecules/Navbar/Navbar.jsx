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


export default ({navigationButtonList}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let history = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {navigationButtonList.map((navbutton, i) => {
            return <NavigationButton destinationPath={navbutton.path} label={navbutton.label} key={i}></NavigationButton>
          })}
        </Toolbar>
      </AppBar>
  )
}