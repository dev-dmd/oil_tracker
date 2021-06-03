import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.secondary,
  },
  number: {
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(1),
  },
  units: {
    color: theme.palette.text.secondary,
  }
}));

export default function Productions() {
  const classes = useStyles();
  return (
    <div>
      <Typography component='h5' variant='h5' className={classes.title}>World Oil Production</Typography>
      <Typography variant='h1' className={classes.number}>17.87</Typography>
      <Typography variant='caption' className={classes.units}>millions barrel per day</Typography>
    </div>
  )
}
