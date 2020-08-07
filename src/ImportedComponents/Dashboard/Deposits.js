import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent</Title>
      <Typography component="p" variant="h7">
        Character 1
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} variant='h7'>
        Universe 1
      </Typography>

      <Typography component="p" variant="h7">
        Place 3
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} variant='h7'>
        Universe 7
      </Typography>
    </React.Fragment>
  );
}