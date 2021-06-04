import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItems';
import PaperItem from '../Grid/PaperItem';
import PaperContainer from '../Grid/PaperContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 0,
    alignSelf: 'stretch',
    zIndex: 1,
    '& .MuiPaper-elevation24.MuiPaper-rounded ': {
      padding: theme.spacing(2)
    },
    '& .MuiPaper-root.makeStyles-paper-8.MuiPaper-elevation0 ': {
      padding: '2px 4px'
    }
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer container spaceing={3}>
        <GridItem elevation={0} item xs={12}>
          <GridContainer container spaceing={3}>
            <GridItem elevation={0} item xs={12}>
              <PaperContainer elevation={0}>
                <PaperItem elevation={24}>
                  <Typography variant="h3">Worldwide Oil Production</Typography>
                </PaperItem>
              </PaperContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  )
}
