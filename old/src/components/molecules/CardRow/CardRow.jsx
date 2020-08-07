import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup, Tab, Tabs, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory, Link} from 'react-router-dom'
import NavigationButton from '../../atoms/NavigationButton/NavigationButton'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';





export default ({ cardImage, cardHeader, cardBody }) => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={4}>
            <Card>
                <CardContent>
                <Typography variant="h3" component="h2" align='center'>
                    {cardImage}
                </Typography>
                <Typography variant='h4' align='center'>
                    {cardHeader}
                </Typography>
                <Typography variant="body2" component="p">
                    <br /><br />
                    {cardBody}
                    <br />
                </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}