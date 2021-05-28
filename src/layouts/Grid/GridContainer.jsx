import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <div className={classes.root}>
      <Grid container { ...rest }>
        {children}
      </Grid>
    </div>
  );
}