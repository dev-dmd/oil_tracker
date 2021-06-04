import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItems';
import PaperItem from '../Grid/PaperItem';
import {ReactComponent as WorldMap} from '../../assets/images/map.svg';
import PaperContainer from '../Grid/PaperContainer';
import Productions from '../../components/productions';
import Producers from '../../components/producers';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    '& > *' : {
      height: '100%',
      '& .MuiPaper-root.makeStyles-paper-8.MuiPaper-elevation0, .makeStyles-root-4' : {
        height: '100%',
      }
    },
  },
  stretchColumns: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer style={{zIndex: 0, position: 'relative', height: '100%'}} container spacing={0}>
        <GridItem item xs={12} sm={3}>
          <GridContainer className={classes.stretchColumns} spacing={2}>
            <GridItem style={{flex: 0}} xs={12}>
              <PaperItem elevation={24} style={{padding: '25px 0px 50px 0px', position: 'relative'}}>
                <Productions />
              </PaperItem>
            </GridItem>
            <GridItem style={{flex: 1}} xs={12}>
              <PaperItem elevation={24} style={{padding: '20px 0px 10px 0px', height: '100%', zIndex: 2, position: 'relative'}}>
                <Producers />
              </PaperItem>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem style={{zIndex: -1, position: 'relative'}} item xs={12} sm={5}>           
          <PaperContainer elevation={0}>
            <WorldMap />
          </PaperContainer>
        </GridItem>
        <GridItem item xs={12} sm={4}>           
          <PaperItem>Right</PaperItem>
        </GridItem>
      </GridContainer>           
    </div>
  );
}
