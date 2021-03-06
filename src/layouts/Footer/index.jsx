import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItems';
import PaperItem from '../Grid/PaperItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 0,
    alignSelf: 'stretch',
    position: 'relative',
    zIndex: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer container>
        <GridItem elevation={0} item xs={12}>
          <GridContainer container>
            <GridItem elevation={0} item xs={12}>
              <PaperItem style={{marginTop: '-15px'}} elevation={24}>
                <Typography variant='caption'>*Source EIA (www.eia.gov) and national statistics sources. Petroleum supply includes the production of crude oil (including lease condensate), natural gas plant liquids, and it also includes refinery processing gain for volume (TBPD) only.
                Petroleum and other liquids consumption includes all domestic use and international bunkering of refined products, refinery fuel, and where available, direct combustion of crude oil and refinery by-products.</Typography>
              </PaperItem>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  )
}
