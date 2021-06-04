import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PaperContainer from './PaperContainer';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    textAlign: 'center',
  },
  background: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  }
}));

export default function GridItem(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.gridItem}>
      <PaperContainer square elevation={0} className={classes.background}>
        {children}
      </PaperContainer>
    </Grid>
  );
}
