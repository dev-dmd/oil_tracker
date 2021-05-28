import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaperItem from './Paper';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    textAlign: 'center',
  },
}));

export default function GridItem(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.gridItem}>
      <PaperItem elevation={2} className={classes.paper}>
        {children}
      </PaperItem>
    </Grid>
  );
}
