import React from 'react';
import { Button, Grid, Divider } from '@material-ui/core';
import Typed from 'react-typed'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const textLines = [
    'Organize',
    'Plan',
    'Write',
  ];

  const t = ' your story'

export default () => {
  return (

    <Grid container direction="row" justify='center'>
        <Grid item xs={12} align="center"> 
        <h1>
        <Typed
                strings={textLines}
                typeSpeed={40}
                backSpeed={50}
                loop
                showCursor={false}
            />
            {t}
        </h1>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} align='center'>
            <h2>An online world planner that lets writer worldbuild, outline plots, and write.</h2>
        </Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={4}><Divider variant="middle" /></Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={4} align='center'><Button variant='contained' color='secondary'>Sign up for free</Button></Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={12} align='center'><ExpandMoreIcon></ExpandMoreIcon></Grid>
        <Grid item xs={12}><Divider variant="middle" /></Grid>
    </Grid>
    
  )
}