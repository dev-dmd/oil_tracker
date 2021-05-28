import React from 'react';
import { Typography } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItems';

export default function Header() {
  return (
    <GridContainer container spaceing={3}>
      <GridItem item xs={12}>
        <Typography>Header</Typography>
      </GridItem>
    </GridContainer>
  )
}
