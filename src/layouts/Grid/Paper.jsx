import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PaperItem(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
      <Paper { ...rest } className={classes.paper}>
        {children}
      </Paper>
  );
}
