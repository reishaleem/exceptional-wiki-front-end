import React from 'react';
import Navbar from '../../molecules/Navbar/Navbar'
import {HomeButtonList as NavbarButtonList} from '../../../constants/NavbarButtonLists'
import TypewriterText from '../../atoms/TypewriterText/TypewriterText'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button, Grid, Divider, Paper} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CardRow from '../../molecules/CardRow/CardRow'






export default () => {
  

  return (
    <>
      <Navbar navigationButtonList={NavbarButtonList}></Navbar>
      <TypewriterText />
      <CardRow cardImage={<AssignmentIcon></AssignmentIcon>} cardHeader={"Write"} cardBody={"Write your stories"} /> 

    <Divider />
    <Grid container>
      <Grid item xs={12} align='center'>
        <h1>Key Features</h1>
      </Grid>
      <CardRow cardImage={<LibraryBooksIcon></LibraryBooksIcon>} cardHeader={"Name Generator"} cardBody={"Generate stuff..."} /> 
    </Grid>
  

    </>
  )
}