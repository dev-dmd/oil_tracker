import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main
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
