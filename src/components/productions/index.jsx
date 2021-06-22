import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFetch } from '../../fetcher/';
import { co } from 'co';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.secondary,
  },
  number: {
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(1),
    fontSize: '56px'
  },
  units: {
    color: theme.palette.text.secondary,
  }
}));

export default function Productions() {
  const classes = useStyles();
  const { worldOilProd } = useFetch();

  return (
    <div>
      <Typography component='h5' variant='h5' className={classes.title}>World Oil Production</Typography>
      <Typography variant='h1' className={classes.number}>
      {
        worldOilProd.data === undefined ? NaN :
        (worldOilProd.data.series[0].data[0][1]/1000).toFixed(2)
      }
      </Typography>
      <Typography variant='caption' className={classes.units}>million barrels per day</Typography>
    </div>
  )
}
